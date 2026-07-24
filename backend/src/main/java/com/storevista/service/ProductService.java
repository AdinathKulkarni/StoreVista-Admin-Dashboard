package com.storevista.service;

import com.storevista.dto.ProductRequestDto;
import com.storevista.dto.ProductResponseDto;
import com.storevista.entity.Product;
import com.storevista.exception.DuplicateSkuException;
import com.storevista.exception.ResourceNotFoundException;
import com.storevista.mapper.ProductMapper;
import com.storevista.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public List<ProductResponseDto> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(productMapper::toResponseDto)
                .toList();
    }

    public ProductResponseDto getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
        return productMapper.toResponseDto(product);
    }

    @Transactional
    public ProductResponseDto createProduct(ProductRequestDto requestDto) {
        String sku = requestDto.getSku().trim().toUpperCase();
        if (productRepository.existsBySku(sku)) {
            throw new DuplicateSkuException("Product with SKU '" + sku + "' already exists");
        }

        Product product = productMapper.toEntity(requestDto);
        Product savedProduct = productRepository.save(product);
        return productMapper.toResponseDto(savedProduct);
    }

    @Transactional
    public ProductResponseDto updateProduct(Long id, ProductRequestDto requestDto) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));

        String sku = requestDto.getSku().trim().toUpperCase();
        if (productRepository.existsBySkuAndIdNot(sku, id)) {
            throw new DuplicateSkuException("Product with SKU '" + sku + "' already exists");
        }

        productMapper.updateEntity(product, requestDto);
        Product updatedProduct = productRepository.save(product);
        return productMapper.toResponseDto(updatedProduct);
    }

    @Transactional
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new ResourceNotFoundException("Product not found with id: " + id);
        }
        productRepository.deleteById(id);
    }
}
