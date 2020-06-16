import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

import Sidebar from './Sidebar';

class Article extends Component {
	render() {
		return(
			<div className="center">
			    <section id='content'>
			        <article className="article-item article-detail">
			            <div className="image-wrap">
			              <img src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="paisaje"/>
			            </div>

			            <h1 className="subheader">Articulo de prueba</h1>
			            <span className="date">
			              Hace 5 minutos
			            </span>
			            <p>
			              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			            </p>
			            <p>
			              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae facere perspiciatis accusamus voluptate amet sapiente quam. Quidem optio provident eligendi nihil explicabo debitis non facilis! Enim officia nam unde qui rem aut ipsam, nemo id quasi consequuntur. Dolor recusandae molestias quas esse commodi alias blanditiis facilis, perferendis cumque officiis cupiditate voluptatum exercitationem eveniet expedita assumenda, distinctio magnam fuga necessitatibus laudantium nobis placeat saepe voluptatibus incidunt voluptatem. Pariatur deserunt velit earum fuga quis excepturi repellendus voluptatem ab repudiandae qui nisi porro alias delectus sed hic voluptatibus, id tempore, adipisci cupiditate architecto vitae debitis rem. Inventore nam, eius unde, ullam quaerat dignissimos.
			            </p>
			            <p>
			              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio corporis quam quae quos eius ipsum tempore, delectus molestias eligendi nulla fugit dignissimos modi vero, repellendus quas odit quia quisquam omnis doloribus reiciendis quibusdam! Totam, iusto aperiam voluptas, perferendis officia illo nostrum, consequuntur explicabo perspiciatis nobis modi velit sed rerum ad illum consectetur! Magni incidunt quod officia magnam consectetur eum, quas necessitatibus culpa molestiae impedit assumenda. Numquam temporibus itaque alias quia. Dignissimos a autem dolores quos, ab dicta suscipit magnam aliquid, laboriosam reprehenderit. Aliquid est veniam officia repellat suscipit dolore hic quo illo officiis maxime iste tempore unde dolor, sint quis nobis consequuntur omnis accusantium architecto nam necessitatibus nulla ad? Inventore repellendus eligendi cupiditate cumque suscipit. Nemo adipisci ea voluptatum non commodi, odit aliquam ipsam reprehenderit quidem! Nam molestiae velit, ut soluta fugiat in, perferendis consequuntur eum corporis ipsum cupiditate, minima itaque numquam dolore atque aliquid? Magnam explicabo, mollitia expedita non.
			            </p>
			            <div className="clearfix"></div>
			        </article>
			    </section>
			    <Sidebar/>
        </div>
		);
	}
}

export default Article;