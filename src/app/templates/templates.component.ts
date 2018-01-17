import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

    templates = [];
    selectedTemplates = [];

    onClickTemplate(template): void {
        if(this.contains(template)) {
            for(let i in this.selectedTemplates) {
                if(this.selectedTemplates[i].templateId===template.templateId) {
                    this.selectedTemplates.splice(parseInt(i), 1);
                    break;
                }
            }
        }
        else {
            this.selectedTemplates.push(template);
        }
    }

    contains(template): boolean {
        for(let i in this.selectedTemplates) {
            if(this.selectedTemplates[i].templateId===template.templateId) {
                return true;
            }
        }
        return false;
    }

    constructor() { }

    ngOnInit() {
        this.templates = JSON.parse(localStorage.getItem('TemplateNames')).diagnosis;
    }

}
