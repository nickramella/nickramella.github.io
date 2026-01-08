"use client"
import React, { useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PickerValue } from '@mui/x-date-pickers/internals';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import Alert from '@mui/material/Alert';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { PieChart } from '@mui/x-charts/PieChart';

interface PayInfo {
    gross: number;
    takeHome: number;
    taxes: number;
    deductions: number;
}

interface PayStub {
    uid: string;
    date: PickerValue;
    payInfo: PayInfo;
}

const PayComparison = () => {
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [payStubs, setPayStubs] = useState<PayStub[]>([]);
    const [firstPayStubId, setFirstPayStubId] = useState<string>("");
    const [secondPayStubId, setSecondPayStubId] = useState<string>("");
    const [payStubOne, setPayStubOne] = useState<PayStub>();
    const [payStubTwo, setPayStubTwo] = useState<PayStub>();
    const [tab, setTab] = useState<string>("1");
    const [selectedDate, setSelectedDate] = useState<PickerValue | null>(dayjs(Date.now()));
    const createPayStub = () => {
        const gross = Math.random() * (10000 - 1000) + 1000;
        const deductions = Math.random() * (300 - 50) + 50;
        const tax = Math.random() * (25 - 5) + 5;
        const taxes = (gross - deductions) * (tax / 100);
        const takeHome = gross - deductions - taxes;
        const payInfo: PayInfo = {
            gross: Number(gross.toFixed(2)),
            takeHome: Number(takeHome.toFixed(2)),
            taxes: Number(taxes.toFixed(2)),
            deductions: Number(deductions.toFixed(2))
        }
        const payStub: PayStub = {
            uid: crypto.randomUUID(),
            date: selectedDate,
            payInfo: payInfo
        }
        setPayStubs(payStubs => [payStub, ...payStubs]);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000)
    }

  return (
    <div className="p-4 w-full">
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Select Date" value={selectedDate} onChange={(value) => setSelectedDate(value)} />
            </LocalizationProvider>
        </div>
        <button
            className="bg-indigo-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-3 mt-2 hover:cursor-pointer"
            disabled={showSuccess}
            onClick={createPayStub}>Generate Pay Stub
        </button>
        <Alert className={`transition-opacity duration-2000 ease-in-out opacity-0 ${showSuccess && "opacity-100" }`} variant="filled" severity="success">
            Pay Stub Created Successfully for {selectedDate?.format('MM/DD/YYYY')}
        </Alert>
        {payStubs.length > 0 &&
            <div>
                <h1 className='font-bold text-lg'>Select two pay stubs to compare.</h1>
                <Box sx={{ minWidth: 120, padding: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="first-paystub-select-label">Pay Stub 1</InputLabel>
                        <Select
                            labelId="first-paystub-select-label"
                            id="first-paystub-simple-select"
                            label="Pay Stub 1"
                            value={firstPayStubId}
                            onChange={(event) => {
                                const value = event.target.value as string;
                                setFirstPayStubId(value);
                                setPayStubOne(payStubs.find((payStub) => payStub.uid === value))
                            }}
                        >
                            {payStubs.map((payStub) => {
                                return (
                                    <MenuItem value={payStub.uid}>{payStub.date?.format('MM/DD/YYYY')}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, padding: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="second-paystub-select-label">Pay Stub 2</InputLabel>
                        <Select
                            labelId="second-paystub-select-label"
                            id="second-paystub-simple-select"
                            label="Pay Stub 2"
                            value={secondPayStubId}
                            onChange={(event) => {
                                const value = event.target.value as string;
                                setSecondPayStubId(value);
                                setPayStubTwo(payStubs.find((payStub) => payStub.uid === value))
                            }}
                        >
                            {payStubs.map((payStub) => {
                                return (
                                    <MenuItem value={payStub.uid}>{payStub.date?.format('MM/DD/YYYY')}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box>
                { payStubOne && payStubTwo &&
                    <Box sx={{ width: '100%', typography: 'body1', overflow: "scroll" }}>
                        <TabContext value={tab}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={(event: React.SyntheticEvent, newValue: string) => setTab(newValue)} aria-label="lab API tabs example">
                                <Tab label="Pay Stub 1" value="1" />
                                <Tab label="Pay Stub 2" value="2" />
                                <Tab label="Compare" value="3" />
                            </TabList>
                            </Box>
                            <TabPanel value="1">
                                <PieChart
                                    series={[
                                        {
                                            innerRadius: 50, outerRadius: 100,
                                            data: [
                                                { id: 0, value: payStubOne.payInfo.takeHome, label: 'Take Home' },
                                                { id: 1, value: payStubOne.payInfo.taxes, label: 'Taxes' },
                                                { id: 2, value: payStubOne.payInfo.deductions, label: 'Deductions' },
                                            ],
                                        },
                                    ]}
                                    width={200}
                                    height={200}
                                />
                            </TabPanel>
                            <TabPanel value="2">
                                <PieChart
                                    series={[
                                        {
                                            innerRadius: 50, outerRadius: 100,
                                            data: [
                                                { id: 0, value: payStubTwo.payInfo.takeHome, label: 'Take Home' },
                                                { id: 1, value: payStubTwo.payInfo.taxes, label: 'Taxes' },
                                                { id: 2, value: payStubTwo.payInfo.deductions, label: 'Deductions' },
                                            ],
                                        },
                                    ]}
                                    width={200}
                                    height={200}
                                />
                            </TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                        </TabContext>
                    </Box>
                }
            </div>
        }
    </div>
  )
}

export default PayComparison