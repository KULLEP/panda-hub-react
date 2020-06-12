import $ from "jquery";
import { goToShopPage } from './../../_scripts/RedirectOnPage';

export class BuyItem {

	url = window.globalInfo.php_url_shop;
	id_user = window.globalInfo.infoCurrentUser.id;

	constructor(count, price) {
		this.count = count;
		this.price = price;
	}

	/* КУПИТЬ */
	buy() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'buy_rank.php',
			data: {
				id_user: this.id_user,
				count: this.count,
				price: this.price
			},
			success: e => { 
				goToShopPage();
			}}
			)
		)
	}
}