import {useState} from "react";
import TableWrapper from "./TableWrapper";

export default function ExpensesTableMain() {


    const [dataExpenses, setDataExpenses] = useState([
        {
            id: 0,
            expenses: 'Income',
            percent: '100%',
            amount: 300000,
            children: undefined,
        }, {
            id: 1,
            expenses: 'Basic Expenses',
            percent: null,
            amount: 20000,
            children: [
                {
                    id: 11,
                    expenses: 'Еда',
                    percentAmount: null,
                    amount: 10000,
                },
                {
                    id: 12,
                    expenses: 'Жилье',
                    percentAmount: null,
                    amount: 10000,
                },
                {
                    id: 13,
                    expenses: 'Бытовая химия',
                    percentAmount: null,
                    amount: 10000,
                },
                {
                    id: 14,
                    expenses: 'Телефон',
                    percentAmount: null,
                    amount: 10000,
                },
                {
                    id: 15,
                    expenses: 'Передвижение',
                    percentAmount: null,
                    amount: 10000,
                },
            ],
        },
        {
            id: 2,
            expenses: 'Short Term Expenses',
            percent: null,
            amount: 20000,
            children: [
                {
                    id: 21,
                    expenses: 'Косметика',
                    percentAmount: '5%',
                    amount: 10000,
                },
                {
                    id: 22,
                    expenses: 'Подарки',
                    percentAmount: '5%',
                    amount: 10000,
                },
                {
                    id: 23,
                    expenses: 'Отпуск',
                    percentAmount: '5%',
                    amount: 10000,
                },
            ],
        },
        {
            id: 3,
            expenses: 'Long Term Expenses',
            percent: '15%',
            amount: null,
            children: [
                {
                    id: 31,
                    expenses: 'Машина',
                    percentAmount: '5%',
                    amount: 10000,
                },
                {
                    id: 32,
                    expenses: 'Квартира',
                    percentAmount: '5%',
                    amount: 10000,
                },
                {
                    id: 33,
                    expenses: 'Резервы',
                    percentAmount: '5%',
                    amount: 10000,
                },
            ],
        }
    ]);

    return (
        <div>
          <TableWrapper dataExpenses={dataExpenses} />

        </div>
    )
}