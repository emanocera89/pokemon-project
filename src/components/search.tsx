import React, { useState } from 'react'
import {
    FormControl,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Select,
    MenuItem,
    Slider,
    Typography,
    Stack,
    Chip,
    TextField
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'

interface Props {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleApplyFilters: (type: string, height: number) => void
}

const TYPES = ['all', 'normal', 'grass', 'fire', 'earth', 'water', 'bug', 'electric', 'poison', 'ground', 'fairy', 'fighting', 'rock', 'ghost', 'psychic']
const INITIAL_VALUES = { type: 'all', height: 100 }

const Search: React.FC<Props> = (props) => {
    const { handleInputChange, handleApplyFilters } = props
    const [open, setOpen] = useState<boolean>(false)
    const [type, setType] = useState<string>(INITIAL_VALUES.type)
    const [height, setHeight] = useState<number>(INITIAL_VALUES.height)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleTypeChange = (e: SelectChangeEvent) => {
        const value = e.target.value as string
        setType(value)
    }

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setHeight(newValue as number)
    }

    const handleApply = () => {
        handleApplyFilters(type, height)
        handleClose()
    }

    const handleReset = () => {
        setType(INITIAL_VALUES.type)
        setHeight(INITIAL_VALUES.height)
        handleApplyFilters(INITIAL_VALUES.type, INITIAL_VALUES.height)
    }

    const handleResetType = () => {
        setType(INITIAL_VALUES.type)
        handleApplyFilters(INITIAL_VALUES.type, height)
    }

    const handleResetHeight = () => {
        setHeight(INITIAL_VALUES.height)
        handleApplyFilters(type, INITIAL_VALUES.height)
    }

    return (
        <div className='w-full flex flex-col mb-5'>
            <FormControl fullWidth variant='standard'>
                <TextField
                    id='search-input-field'
                    type='text'
                    sx={{ backgroundColor: 'white' }}
                    variant='filled'
                    placeholder='Search...'
                    fullWidth
                    hiddenLabel
                    onChange={handleInputChange}
                    InputProps={{
                        endAdornment: <IconButton
                        onClick={handleClickOpen}
                    >
                        <FilterListOutlinedIcon />
                    </IconButton>
                    }}
                />
            </FormControl>

            <Stack direction="row" spacing={1} className='mt-4'>
                { type !== INITIAL_VALUES.type && <Chip label={`Type: ${type}`} onDelete={handleResetType} onClick={handleClickOpen} /> }
                { height !== INITIAL_VALUES.height && <Chip label={`Height: ${height}`} onDelete={handleResetHeight} onClick={handleClickOpen} /> }
            </Stack>

            <Dialog
                open={open}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
                fullWidth
                disableEscapeKeyDown={true}
            >
                <DialogTitle id='alert-dialog-title'>{"Search Filters"}</DialogTitle>
                <DialogContent >
                    <FormControl fullWidth className='mt-3'>
                        <Typography id='demo-simple-slider-label' className='mb-2 text-md font-semibold'>Type</Typography>
                        <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            defaultValue='all'
                            value={type}
                            onChange={handleTypeChange}
                        >
                            {TYPES.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className='mt-3'>
                        <Typography id='demo-simple-slider-label' className='mb-2 text-md font-semibold'>Height</Typography>
                        <Slider
                            value={typeof height === 'number' ? height : 0}
                            onChange={handleSliderChange}
                            aria-label='Default'
                            valueLabelDisplay='auto'
                            id='demo-simple-slider'
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleReset}>Reset</Button>
                    <Button onClick={handleApply} autoFocus>
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Search
