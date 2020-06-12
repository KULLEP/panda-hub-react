import React, { useState, useEffect } from 'react';
import MyRedirect from './../../components/MyRedirect';
import { GetInfoCurrentUser } from './../../_scripts/ActionsWithUser';
import Loader from './../../components/Loader/Loader';
import { goToMainPage } from './../../_scripts/RedirectOnPage';
import { BuyItem } from './_scripts';
import { Header, Input, Segment, Divider, Container, Table, Button } from 'semantic-ui-react';
import style from './Style.module.css';

const Shop = () => {

	const [popout, setPopout] = useState(<Loader/>);
	const email = localStorage.getItem('email');
	const password = localStorage.getItem('password');

	document.title = 'Магазин';


	useEffect(() => {
		async function fetchRequest() {
			await new GetInfoCurrentUser(email, password).getInfo();
			setPopout(null);
		}
		fetchRequest();
	});


	const getItemSearch = () => {

	}


	const buy_rank = async (e) => {
		let money = window.globalInfo.infoCurrentUser.panda_money;
		let count = e.currentTarget.dataset.count;
		let price = e.currentTarget.dataset.price;
		if (money >= price) {
			await new BuyItem(count, price).buy();
		} else {
			alert('Не хватает денег');
			console.log(money);
			console.log(count);
			console.log(price);
		}
	}


	return (
		<div className='w-100'>
		<Header attached='top' className='d-flex justify-content-between'>
		<h3 className='mt-auto'>Баланс : {window.globalInfo.infoCurrentUser.panda_money}</h3>
		<Input className={ style.inputSearch } onChange={getItemSearch} icon='search' placeholder='Поиск...' />
		</Header>
		<Segment className={ style.mainBlock } >	 
		<MyRedirect/>
		<span className={ style.textName }>Рейтинг</span>

		<Container textAlign='justified'>
		<Divider />

		<Table celled>
		<Table.Header>
		<Table.Row>
		<Table.HeaderCell>Рейтинг</Table.HeaderCell>
		<Table.HeaderCell>Цена</Table.HeaderCell>
		<Table.HeaderCell></Table.HeaderCell>
		</Table.Row>
		</Table.Header>

		<Table.Body>

		<Table.Row>
		<Table.Cell className={ style.tableText }>10</Table.Cell>
		<Table.Cell className={ style.tableText }>1000</Table.Cell>
		<Table.Cell textAlign='center'><Button onClick={buy_rank} data-count='10' data-price='1000' basic color='green' content='Купить' /></Table.Cell>
		</Table.Row>

		</Table.Body>

		</Table>
		</Container>


		</Segment>
		</div>
		)
}
export default Shop;




