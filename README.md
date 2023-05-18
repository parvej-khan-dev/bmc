# Train Seat Reservation System

This is a simple seat reservation system for a train coach. The system allows users to reserve seats based on certain rules and priorities.

## System Overview

The seat reservation system is designed for a train coach with the following specifications:

* The coach has a total of 80 seats.
* There are 7 seats in each row, except for the last row, which has only 3 seats.
* The coach consists of a single row.


## Functionality

The seat reservation system provides the following functionality:

1. Seat Reservation: Users can reserve seats by specifying the number of seats they require.
Seat Allocation: The system allocates seats according to the following rules:
2. Priority is given to booking seats in one row.
If seats are not available in one row, the system books seats in nearby rows.
3. Multiple Ticket Booking: Users can book multiple tickets in a single transaction.`

## Usage

To use the seat reservation system, follow these steps:
1. Input the required number of seats you wish to reserve.
2. The system will allocate seats based on availability and priority rules.
3. The system will display the seat numbers that have been booked for you.
4. Additionally, the system will show a visual representation of all seats in the coach, indicating their availability status through color or any other suitable means.

## Example
Here's an example to illustrate how the seat reservation system works:

1. Input: 4
2. Output: SeatBooked: Row-1 , Seat - 1,2,3,4


### Coach layout:
```less
Row 1: [01] [02] [03] [04] [05] [06] [07]
Row 2: [08] [09] [10] [11] [12] [13] [14]
...
Row 12: [78] [79] [80]

```
In this example, the system books seats 1, 2, 2, and 4 as they are available in the same row.

## Notes
* The system assumes that users input a valid number of seats within the available capacity.
* The system does not support seat cancellation or modification after reservation.
* The visual representation of the coach layout can be implemented using various means such as colour-coding, if the seat is available is show green otherwise green seat numbering or any other suitable method based on the implementation environment.
