import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Global } from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

	public article: Article;
	public status: string;

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "50",  // En Megas
    uploadAPI:  {
      url: Global.url + 'upload-image',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Subir la imagen para el artículo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
  	private _articleService: ArticleService,
  	private _route: ActivatedRoute,
  	private _router: Router
  ) { 
  	this.article = new Article('', '', '', null, null);
  }

  ngOnInit(): void {
  }

  onSubmit() {
  	this._articleService.create(this.article).subscribe(
  		response => {
	  		if (response.status == 'succes') {
	  			console.log(response);
	  			this.status = 'succes';
	  			this.article = response.article;
	  			this._router.navigate(['/blog']);
	  		} else {
	  			this.status = 'error'
	  		}
  		},
  		error => {
  			console.error(error);
  			this.status = 'error';
  		}
  	);
  }

  imageUpload(data) {
    let imageData = JSON.parse(data.response);
    console.log(imageData);
    this.article.image = imageData.image;
  }

}
