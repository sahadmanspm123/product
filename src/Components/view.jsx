import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const view = () => {
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>brand</TableCell>
                    <TableCell>quantity</TableCell>
                    <TableCell>price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody></TableBody>
        </Table>
    </TableContainer>
    
  )
}

export default view
