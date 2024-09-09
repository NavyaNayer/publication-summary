// src/app.d.ts
declare namespace App {
    interface PageData {
        slug?: string;
        title?: string;
        content?: string;
    }
}
declare global {
	interface Window {
	  vis: any;
	}
  }

  export {};