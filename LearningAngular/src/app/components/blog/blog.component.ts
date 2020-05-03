import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  constructor(
  	private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
  	// this._articleService.pruebas();

  	// subscribe me permite recoger los datos que me devuelve la petición http
  	// Dentro de subscribe tengo dos funciones de callback
  	// Uno para recibir la respuesta y otro para el error
  	this._articleService.getArticles()
  	.subscribe(
  		response => {
  			console.log(response);
  		},
  		error => {
  			console.error(error);
  		}
  	);
  }

}
