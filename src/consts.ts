export const help = `
\x1b[36m
            _       _ _________      __
           (_)     (_)__   __\\ \\    / /
  _ __ ___  _ _ __  _   | |   \\ \\  / / 
 | '_ \` _ \\| | '_ \\| |  | |    \\ \\/ /  
 | | | | | | | | | | |  | |     \\  /   
 |_| |_| |_|_|_| |_|_|  |_|      \\/    
                                                                     
\x1b[0m
Welcome to \x1b[36mminiTV\x1b[0m
A tool to download videos from amazon minitv

\x1b[90mNote: This tool is just a proxy to youtube-dl and requires youtube-dl to be installed on your system to work.
All options for youtube-dl are supported here too.\x1b[0m

\x1b[36mUsage:\x1b[0m minitv <url> [options]

\x1b[36mOptions:\x1b[0m
  -h, --help, help:  Show this help message and exit

  all other provided options are passed to youtube-dl
  run \x1b[36myoutube-dl --help\x1b[0m for help with youtube-dl

\x1b[36mExample:\x1b[0m minitv https://www.amazon.in/minitv/tp/0478a3f9-e35d-40d4-97e8-e09684007fa6 -f bestvideo+bestaudio

\x1b[36mGithub:\x1b[0m https://github.com/arnav-kr/minitv

\x1b[36mAuthor:\x1b[0m \x1b[46m\x1b[30m@arnav-kr\x1b[0m
`;