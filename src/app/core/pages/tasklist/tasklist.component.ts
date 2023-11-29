import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {


  // to be removed, just an example of how to use url in services
  // since now we are using a proxy server, we don't call http://localhost/api/.. 
  //we call directly /api/todo/
  ngOnInit() {
    fetch("/api/todo/")
    .then(result=>result.json())
    .then(data=>console.log(data))

  }

}
