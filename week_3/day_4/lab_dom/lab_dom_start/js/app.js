document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded');


    const HandleNewAlbum = (event) => {
        event.preventDefault();
        console.log(event);

        const albumListItem = document.createElement('li');
        albumListItem.classList.add('album-list-item');



        const title = document.createElement('h2');
        title.textContent = event.target.title.value;
        albumListItem.appendChild(title);
        title.classList.add('title')

        const artist = document.createElement('h3');
        artist.textContent = event.target.artist.value;
        albumListItem.appendChild(artist);
        artist.classList.add('artist')

        const description = document.createElement('p');
        description.textContent = event.target.description.value;

        albumListItem.appendChild(description)
        description.classList.add('description')

        const genre = document.createElement('p');
        genre.textContent = `The Genre is: ${event.target.genre.value}`;
        genre.classList.add('genre')
        genre.classList.add('description')
        albumListItem.appendChild(genre)


        const date = document.createElement('p');
        date.textContent = `The Release Date is: ${event.target.date.value}`;

        date.classList.add('date')
        albumListItem.appendChild(date)
        date.classList.add('description')

        const kids = document.createElement('p');
        const cb = document.querySelector('#kids');
        if (cb.checked == true) {
            kids.textContent = 'Kid Friendly';
        } else {
            kids.textContent = 'Not for kids';
        }
        albumListItem.appendChild(kids);
        kids.classList.add('title')

        const button = document.createElement('button');
        albumListItem.appendChild(button);

        button.textContent = 'Add Album To Playlist';
        button.classList.add('album-button')

        const albumList = document.querySelector('#album-list');
        albumList.appendChild(albumListItem);


        event.target.reset();
    }

    const newAlbum = document.querySelector('#new-album-form');
    newAlbum.addEventListener('submit', HandleNewAlbum);
})