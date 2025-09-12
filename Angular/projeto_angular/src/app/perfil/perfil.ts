import { Component, } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: "app-perfil",
    imports: [CommonModule],
    templateUrl: "./perfil.html",
    styleUrls: ["./perfil.css"],
})
export class PerfilComponent {
    titulo: string = 'Minha pagina'
    
    imagem: string = "https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_1280.jpg";

}