import IconButton from '@mui/joy/IconButton'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'


export default function Footer() {
    return (
        <footer className='bg-blue-500'>
            <div className='w-full mx-auto p-5 md:flex md:items-center md:justify-between'>
                <span className='text-lg text-white sm:text-center dark:text-gray-400'>Developed by <a href='https://emmanuelnocera.com' className='hover:underline' target='_blank'>Emmanuel Nocera</a>.
                </span>
                <ul className='flex flex-wrap gap-4 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
                    <li>
                        <IconButton component='a' href='https://www.emmanuelnocera.com' target='_blank' title='website' className='hover:bg-transparent'>
                            <LanguageOutlinedIcon className='text-white' />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton component='a' href='mailto:ema.nocera.89@gmail.com' title='email' className='hover:bg-transparent'>
                            <EmailOutlinedIcon className='text-white' />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton component='a' href='https://github.com/emanocera89' target='_blank' title='Github' className='hover:bg-transparent'>
                            <GitHubIcon className='text-white' />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton component='a' href='https://www.linkedin.com/in/emanocera/' target='_blank' title='LinkedIn' className='hover:bg-transparent'>
                            <LinkedInIcon className='text-white' />
                        </IconButton>
                    </li>
                </ul>
            </div>
        </footer>
    )
}