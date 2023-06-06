import { Typography } from '@material-tailwind/react'
import LogoImg from '../../assets/logo.png'

const LINKS = [
  {
    title: 'Company Values',
    items: ['Accessibility', 'Education', 'Inclusion and Diversity', 'Solutions']
  },
  {
    title: 'Company',
    items: ['About us', 'Privacy', 'Environment', 'News']
  }
]

const currentYear = new Date().getFullYear()

export default function Footer () {
  return (
    <footer className='mx-auto w-full max-w-screen-xl px-4 py-3'>
      <div className='grid grid-cols-1 justify-between gap-4 md:grid-cols-2'>
        <img
          className='h-36 w-52'
          src={LogoImg}
          alt='logo image'
        />
        <div className='grid grid-cols-2 justify-between gap-4'>
          {LINKS.map(({ title, items }) => (
            <ul key={title} className='mx-auto'>
              <Typography
                variant='small'
                color='blue-gray'
                className='mb-3 font-medium opacity-40'
              >
                {title}
              </Typography>
              {items.map((link) => (
                <li key={link}>
                  <Typography
                    as='a'
                    href='#'
                    color='gray'
                    className='py-1.5 font-normal transition hover:text-blue-gray-900 hover:scale-105'
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className='mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between'>
        <Typography
          variant='small'
          className='mb-4 text-center font-normal text-blue-gray-900 md:mb-0'
        >
          &copy; {currentYear}{' '}
          <a href='https://www.linkedin.com/in/wilson-hm/'>Wilson Henao Motato</a>. All
          Rights Reserved.
        </Typography>
        <div className='flex gap-4 text-blue-gray-900 sm:justify-center'>
          <Typography
            as='a'
            target='_blank'
            href='https://www.facebook.com/'
            className='opacity-80 transition-opacity hover:opacity-100'
          >
            <svg
              className='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                clipRule='evenodd'
              />
            </svg>
          </Typography>
          <Typography
            as='a'
            target='_blank'
            href='https://www.linkedin.com/in/wilson-hm/'
            className='opacity-80 transition-opacity hover:opacity-100'
          >
            <svg
              className='h-[17px] w-4'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'
                clipRule='evenodd'
              />
            </svg>
          </Typography>
          <Typography
            as='a'
            target='_blank'
            href='https://github.com/'
            className='opacity-80 transition-opacity hover:opacity-100'
          >
            <svg
              className='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
              />
            </svg>
          </Typography>
        </div>
      </div>
    </footer>
  )
}
