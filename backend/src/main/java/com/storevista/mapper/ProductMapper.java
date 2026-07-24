package com.storevista.mapper;

import com.storevista.dto.ProductRequestDto;
import com.storevista.dto.ProductResponseDto;
import com.storevista.entity.Product;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class ProductMapper {

    public Product toEntity(ProductRequestDto dto) {
        return Product.builder()
                .name(dto.getName().trim())
                .price(dto.getPrice())
                .category(dto.getCategory().trim())
                .date(dto.getDate() != null ? dto.getDate() : LocalDate.now())
                .sku(dto.getSku().trim().toUpperCase())
                .build();
    }

    public void updateEntity(Product product, ProductRequestDto dto) {
        product.setName(dto.getName().trim());
        product.setPrice(dto.getPrice());
        product.setCategory(dto.getCategory().trim());
        product.setDate(dto.getDate() != null ? dto.getDate() : LocalDate.now());
        product.setSku(dto.getSku().trim().toUpperCase());
    }

    public ProductResponseDto toResponseDto(Product product) {
        return ProductResponseDto.builder()
                .id(product.getId())
                .name(product.getName())
                .price(product.getPrice())
                .category(product.getCategory())
                .date(product.getDate())
                .sku(product.getSku())
                .build();
    }
}
