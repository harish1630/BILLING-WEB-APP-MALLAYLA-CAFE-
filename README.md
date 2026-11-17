# Mallayla Cafe Order Web App

A small café ordering web application for taking customer orders, selecting drinks, and submitting the order details to Google Apps Script.

## Features

- Menu browsing with search
- Quantity controls for each beverage
- Customer form with name and mobile number
- Optional special instructions/feedback
- Live order summary with total calculation
- Submit orders to Google Apps Script and store them in Google Sheets

## Tech Stack

- HTML
- CSS
- JavaScript
- Google Apps Script
- Google Sheets

## Local Setup

1. Open `index.html` in a browser.
2. Ensure the Apps Script endpoint is configured in the `SCRIPT_URL` constant.
3. Deploy the Apps Script project and connect it to the spreadsheet.

## Deployment

This app is designed to work with a Google Apps Script backend that writes order entries to a sheet.

## Project Structure

- `index.html` — frontend UI and order logic
- `Code.gs` — Apps Script backend for saving the order data

## Notes

The order form includes customer details and the selected items, then submits them to a Google Apps Script endpoint for storage.
