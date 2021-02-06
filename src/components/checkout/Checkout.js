import React from 'react'
import Nav from '../navbar/Nav'
import './Checkout.css'

class Checkout extends React.Component {
    constructor() {
        super(); 
        this.state = {
            startDate: '',
            totalCost: 0
        }
    }

    getStartDate = (event) => {
        event.preventDefault(); 
        const date = event.target.value;
        this.setState({
            startDate: date
        })
    } 
    
    calculateCost = (event) => {
        event.preventDefault(); 

        // get dates
        const startDate = this.state.startDate;
        const endDate = event.target.value;

        // split date values into array and retrieve just the day values (excluding month/year)
        const startDateArr = startDate.split(''); 
        const endDateArr = endDate.split('');
        function getMiddleInt(arr) {
            let emptyArr = []
            const first = arr[8]
            const second = arr[9]
            emptyArr.push(first)
            emptyArr.push(second)
            return emptyArr.join('');
        }

        // convert day values from string to int
        const startDateDay = parseInt(getMiddleInt(startDateArr))
        const endDateDay = parseInt(getMiddleInt(endDateArr))

        // calculate difference to determine total number of rental days
        const difference = endDateDay - startDateDay;

        // retrieve the daily cost of the item
        const checkoutItem = this.props.results.find(item => {
            return item.id == this.props.match.params.id
        })

        const itemDailyCost = checkoutItem.daily_cost

        // multiply daily cost by number of days to get total cost
        const totalRentalCost = itemDailyCost * difference
        
        this.setState({
            totalCost: totalRentalCost
        })

    } 

    render() {
        return (
            <>
                <Nav isLoggedIn={this.props.isLoggedIn} handleLogout={this.props.handleLogout} />
                <main>
                    {
                        this.props.results.map((item, idx) => {
                            if (item.id == this.props.match.params.id) {
                                return <div className="checkout" key={idx}>
                                            <h1>Checkout</h1>
                                            <h3>You Are About to Rent the Following Item:</h3>
                                            <img src={item.img_url} height="300" width="auto" />
                                            <h2>{item.item_name}</h2>
                                            <h3>From: {item.owner}</h3>
                                            <h3>{item.city}</h3>
                                            <p>Daily Cost: ${item.daily_cost}</p>
                                            <p>Weekly Cost: ${item.weekly_cost}</p>
                                            <p>{item.description}</p>
                                            <form onSubmit={event => this.props.handleCheckout(event)}>
                                                <fieldset>
                                                    <legend><h2>Choose Rental Period</h2></legend>
                                                    <label htmlFor="pickupdate">Pickup Date</label>
                                                    <input onChange={event => this.getStartDate(event)} id="pickupdate" type="date"/>
                                                    <label htmlFor="returndate">Return Date</label>
                                                    <input onChange={event => this.calculateCost(event)} id="returndate" type="date"/><br/>
                                                    <input type="hidden" id="itemid" value={item.id} />
                                                </fieldset><br/>
                                                <h3>Total Cost: ${this.state.totalCost}</h3>
                                                <fieldset className="creditcard">
                                                    <legend><h2>Enter Credit Card Info</h2></legend>
                                                    <label htmlFor="ccnumber">Credit Card Number:</label>
                                                    <input id="ccnumber" type="text" /><br/>
                                                    <label htmlFor="expiration">Expiration Date:</label>
                                                    <input id="expiration" type="text" /><br/>
                                                    <label htmlFor="securitycode">Security Code:</label>
                                                    <input id="securitycode" type="text" />
                                                </fieldset>
                                                <button type="submit">Checkout</button>
                                            </form>
                                        </div>
                            }
                        })
                    }
                </main>
                <footer>
                    <span> &#169; Rentit 2021</span>
                </footer>
            </>
        )
    }
}

export default Checkout

/*

<>
    <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
    <main>
        {
            props.results.map((item, idx) => {
                if (item.id == props.match.params.id) {
                    return <div className="checkout" key={idx}>
                                <h1>Checkout</h1>
                                <h3>You Are About to Rent the Following Item:</h3>
                                <img src={item.img_url} height="300" width="auto" />
                                <h2>{item.item_name}</h2>
                                <h3>From: {item.owner}</h3>
                                <h3>{item.city}</h3>
                                <p>Daily Cost: ${item.daily_cost}</p>
                                <p>Weekly Cost: ${item.weekly_cost}</p>
                                <p>{item.description}</p>
                                <form onSubmit={event => props.handleCheckout(event)}>
                                    <fieldset>
                                        <legend><h2>Choose Rental Period</h2></legend>
                                        <label htmlFor="pickupdate">Pickup Date</label>
                                        <input id="pickupdate" type="date"/>
                                        <label htmlFor="returndate">Return Date</label>
                                        <input id="returndate" type="date"/><br/>
                                        <input type="hidden" id="itemid" value={item.id} />
                                    </fieldset><br/>
                                    <fieldset className="creditcard">
                                        <legend><h2>Enter Credit Card Info</h2></legend>
                                        <label htmlFor="ccnumber">Credit Card Number:</label>
                                        <input id="ccnumber" type="text" /><br/>
                                        <label htmlFor="expiration">Expiration Date:</label>
                                        <input id="expiration" type="text" /><br/>
                                        <label htmlFor="securitycode">Security Code:</label>
                                        <input id="securitycode" type="text" />
                                    </fieldset>
                                    <button type="submit">Rent</button>
                                </form>
                            </div>
                }
            })
        }
    </main>
    <footer>
        <span> &#169; Rentit 2021</span>
    </footer>
</>

*/
