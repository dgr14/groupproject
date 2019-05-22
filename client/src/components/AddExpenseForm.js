import React from 'react'
import Styles from './AddExpenseForm.module.css'

const AddExpenseForm = props => {
    const { 
        handleChange, handleSubmit, fullName,
        username, mortgageOrRent, mortgageOrRentAmount,
        mortgageOrRentDate, electricity, electricityAmount,
        electricityDate, transportationAmount, transportationDate,
        insuranceAmount, insuranceDate, loansAmount,
        loansDate, membershipsAmount, membershipsDate,
        groceriesAmount, groceriesDate, clothingAmount,
        clothingDate, educationAmount, educationDate,
        personalCareAmount, personalCareDate, entertainmentAmount,
        entertainmentDate, charitiesAmount, charitiesDate,
        income1, income1Amount, income1Date,
        income2, income2Amount, income2Date,
        income3, income3Amount, income3Date,
        oilAmount, oil, heatingOilOrGas,
        heatingOilOrGasAmount, heatingOilOrGasDate,
        internet, internetAmount, internetDate,
        cable, cableAmount, cableDate,
         water, waterAmount, waterDate,
        phone, phoneAmount, phoneDate, transportation,
        insurance, loans, memberships, groceries,
        clothing, education, personalCare, entertainment,
        charities
         } = props
    return (
        <form onSubmit={handleSubmit}>
            <h1 className={Styles.titles}>Income</h1>
            <ul className={Styles.expenseListStyle}>
                <li>
                <input className={Styles.checkbox} type="checkbox" name="income1" checked={income1} onChange={handleChange}/><p className={Styles.expIncTitle}>Income 1</p>
                <input type="number" name="income1Amount" value={income1Amount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="income1Date" value={income1Date} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="income2" checked={income2} onChange={handleChange}/><p className={Styles.expIncTitle}>Income 2</p>
                <input type="number" name="income2Amount" value={income2Amount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="income2Date" value={income2Date} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="income3" checked={income3} onChange={handleChange}/><p className={Styles.expIncTitle}>Income 3</p>
                <input type="number" name="income3Amount" value={income3Amount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="income3Date" value={income3Date} placeholder= "Amount" onChange={handleChange}/>
                </li>
            </ul>

            <h1 className={Styles.titles}>Expenses</h1>
            <ul className={Styles.expenseListStyle}>
                <li>
                <input type="checkbox" name="mortgageOrRent" checked={mortgageOrRent} onChange={handleChange}/><p className={Styles.expIncTitle}>Mortgage/Rent</p>
                <input type="number" name="mortgageOrRentAmount" value={mortgageOrRentAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="mortgageOrRentDate" value={mortgageOrRentDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="electricity" checked={electricity} onChange={handleChange}/><p className={Styles.expIncTitle}>Electricity</p>
                <input type="number" name="electricityAmount" value={electricityAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="electricityDate" value={electricityDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="heatingOilOrGas" checked={heatingOilOrGas} onChange={handleChange}/><p className={Styles.expIncTitle}>Heating/Oil/Natural Gas</p>
                <input type="number" name="heatingOilOrGasAmount" value={heatingOilOrGasAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="heatingOilOrGasDate" value={heatingOilOrGasDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="internet" checked={internet} onChange={handleChange}/><p className={Styles.expIncTitle}>Internet</p>
                <input type="number" name="internetAmount" value={internetAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="internetDate" value={internetDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="cable" checked={cable} onChange={handleChange}/><p className={Styles.expIncTitle}>Cable</p>
                <input type="number" name="cableAmount" value={cableAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="cableDate" value={cableDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="water" checked={water} onChange={handleChange}/><p className={Styles.expIncTitle}>Water</p>
                <input type="number" name="waterAmount" value={waterAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="waterDate" value={waterDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="phone" checked={phone} onChange={handleChange}/><p className={Styles.expIncTitle}>Phone</p>
                <input type="number" name="phoneAmount" value={phoneAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="phoneDate" value={phoneDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="transportation" checked={transportation} onChange={handleChange}/><p className={Styles.expIncTitle}>Transportation</p>
                {/* (car maintenance, fuel, registration, parking fees, etc.) */}
                <input type="number" name="transportationAmount" value={transportationAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="transportationDate" value={transportationDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="insurance" checked={insurance} onChange={handleChange}/><p className={Styles.expIncTitle}>Insurance</p>
                {/* (home, car, health) */}
                <input type="number" name="insuranceAmount" value={insuranceAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="insuranceDate" value={insuranceDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="loans" checked={loans} onChange={handleChange}/><p className={Styles.expIncTitle}>Loan Payments</p>
                <input type="number" name="loansAmount" value={loansAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="loansDate" value={loansDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="memberships" checked={memberships} onChange={handleChange}/><p className={Styles.expIncTitle}>Memberships</p>
                <input type="number" name="membershipsAmount" value={membershipsAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="membershipsDate" value={membershipsDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="groceries" checked={groceries} onChange={handleChange}/><p className={Styles.expIncTitle}>Groceries</p>
                <input type="number" name="groceriesAmount" value={groceriesAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="groceriesDate" value={groceriesDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="clothing" checked={clothing} onChange={handleChange}/><p className={Styles.expIncTitle}>Clothing</p>
                <input type="number" name="clothingAmount" value={clothingAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="clothingDate" value={clothingDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="education" checked={education} onChange={handleChange}/><p className={Styles.expIncTitle}>Education</p>
                <input type="number" name="educationAmount" value={educationAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="educationDate" value={educationDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="personalCare" checked={personalCare} onChange={handleChange}/><p className={Styles.expIncTitle}>Personal Care</p>
                <input type="number" name="personalCareAmount" value={personalCareAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="personalCareDate" value={personalCareDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="entertainment" checked={entertainment} onChange={handleChange}/><p className={Styles.expIncTitle}>Entertainment</p>
                <input type="number" name="entertainmentAmount" value={entertainmentAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="entertainmentDate" value={entertainmentDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
                <li>
                <input type="checkbox" name="charities" checked={charities} onChange={handleChange}/><p className={Styles.expIncTitle}>Charitiable Contributions</p>
                <input type="number" name="charitiesAmount" value={charitiesAmount} placeholder= "Amount" onChange={handleChange}/>
                Due: <input type="date" name="charitiesDate" value={charitiesDate} placeholder= "Amount" onChange={handleChange}/>
                </li>
            </ul>

            <button className={Styles.addExpenseButton}>Add Expenses</button>
        </form>
    )
}

export default AddExpenseForm
/*
            <input type="checkbox" name="xxx" value="xxx"/>xxx
            <input type="number" name="xxxAmount" value={xxxAmount} placeholder= "Amount" onChange={handleChange}/>
            Due: <input type="date" name="xxxDate" value={xxxDate} placeholder= "Amount" onChange={handleChange}/><br></br>
*/