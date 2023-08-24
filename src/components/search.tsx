import React, { useState } from 'react';
import {
    FormControl,
    Input,
    InputLabel,
    InputAdornment,
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
    Chip
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

interface Props {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleApplyFilters: (type: string, height: number) => void;
}

const TYPES = ['all', 'normal', 'grass', 'fire', 'earth', 'water', 'bug', 'electric', 'poison', 'ground', 'fairy', 'fighting', 'rock', 'ghost', 'psychic'];
const INITIAL_VALUES = { type: 'all', height: 100 }

const Search: React.FC<Props> = (props) => {
    const { handleInputChange, handleApplyFilters } = props;
    const [open, setOpen] = useState<boolean>(false);
    const [type, setType] = useState<string>(INITIAL_VALUES.type);
    const [height, setHeight] = useState<number>(INITIAL_VALUES.height);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTypeChange = (e: SelectChangeEvent) => {
        const value = e.target.value as string;
        setType(value);
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setHeight(newValue as number);
    };

    const handleApply = () => {
        handleApplyFilters(type, height);
        handleClose()
    };

    const handleReset = () => {
        setType(INITIAL_VALUES.type)
        setHeight(INITIAL_VALUES.height)
        handleApplyFilters(INITIAL_VALUES.type, INITIAL_VALUES.height);
        handleClose()
    };

    const handleResetType = () => {
        setType(INITIAL_VALUES.type)
        handleApplyFilters(INITIAL_VALUES.type, height);
    }

    const handleResetHeight = () => {
        setHeight(INITIAL_VALUES.height)
        handleApplyFilters(type, INITIAL_VALUES.height);
    }

    return (
        <div className='w-full flex mb-5'>
            <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
                <Input
                    id='standard-adornment-password'
                    type='text'
                    placeholder='Search...'
                    onChange={handleInputChange}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton
                                onClick={handleClickOpen}
                                aria-label='toggle password visibility'
                            >
                                <FilterListOutlinedIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

            <Stack direction="row" spacing={1}>
                { type !== INITIAL_VALUES.type && <Chip label={`Type: ${type}`} onDelete={handleResetType} onClick={handleClickOpen} /> }
                { height !== INITIAL_VALUES.height && <Chip label={`Height: ${height}`} onDelete={handleResetHeight} onClick={handleClickOpen} /> }
            </Stack>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
                fullWidth
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
    );
};

export default Search;
