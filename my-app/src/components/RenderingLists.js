import React from 'react'
import Book from './Book.js'

function RenderingLists() {
    const booklist = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title: 'to kill a mockingbird',
            author: 'f. scott',
            pages: 281
        },
        {
            title: 'the great gatsby',
            author: 'harper lee',
            pages: 250
        },
        {
            title: 'the catcher in the rye',
            author: 'j. salinger',
            pages: 300
        }
    ]


  return (
    <div>
        {booklist.map((book) => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr/>
        {
            books.map(book => {
                return (
                    <div key={book.title}>
                        <h5>Title: {book.title}</h5>
                        <p>Author: {book.author}</p>
                        <p>Pages: {book.pages}</p>
                    </div>
                )
            })
        }
        <hr />
        {books.map(book => {
            return <Book key={book.title} book={book} />
        })}
    
    </div>
    

  )
}

export default RenderingLists