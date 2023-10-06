import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {

  constructor() { }

  // Fungsi untuk menambahkan film ke daftar favorit di local storage
  addToFavorites(movie: any): void {
    let favorites: any[] = []
    const favoritesFromLocalStorage = localStorage.getItem('favorites');
    favorites = favoritesFromLocalStorage ? JSON.parse(favoritesFromLocalStorage) : [];

    // Pastikan film tidak ada dalam daftar favorit sebelumnya
    if (!favorites.some((fav: any) => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  // Fungsi untuk mendapatkan daftar film favorit dari local storage
  getFavorites(): any[] {
    const favoritesFromLocalStorage = localStorage.getItem('favorites');
    return favoritesFromLocalStorage ? JSON.parse(favoritesFromLocalStorage) : [];
  }

  // Fungsi untuk menghapus film dari daftar favorit di local storage
  removeFromFavorites(movieId: number): void {
    let favorites: any[] = [];
    const favoritesFromLocalStorage = localStorage.getItem('favorites');
    if (favoritesFromLocalStorage !== null) {
      favorites = JSON.parse(favoritesFromLocalStorage);
    }

    // Hapus film berdasarkan ID
    favorites = favorites.filter((fav: any) => fav.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  // Fungsi untuk memeriksa apakah film dengan movieId ada dalam daftar favorit
  isInFavorites(movieId: number): boolean {
    let favorites: any[] = []
    const favoritesFromLocalStorage = localStorage.getItem('favorites');
    if (favoritesFromLocalStorage !== null) {
      favorites = JSON.parse(favoritesFromLocalStorage);
    }
    return favorites.some((fav: any) => fav.id === movieId);
  }
}
