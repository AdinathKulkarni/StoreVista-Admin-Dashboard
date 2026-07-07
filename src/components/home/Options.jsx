import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const items = [
  { title: 'Wireless Headphones', detail: 'High-demand audio gear with strong repeat purchase rates.' },
  { title: 'Smart Watch', detail: 'Premium wearable category driving rising engagement this month.' },
  { title: 'Gaming Mouse', detail: 'Fast-moving accessory with excellent conversion performance.' },
  { title: 'Portable Charger', detail: 'Consistent best-seller with strong profit margins.' }
]

export default function Options() {
  return (
    <div className='space-y-2'>
      {items.map((item, index) => (
        <Accordion key={item.title} defaultExpanded={index === 0} className='rounded-xl shadow-none border border-slate-200'>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Typography component='span' className='font-semibold text-gray-700'>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-sm text-gray-600'>{item.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
