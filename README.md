# Voting app: Dockerize app for voting

### Principal contributors :

[Ilies][ilies]
[ilies]: https://github.com/Ghz4070/react_docker/tree/main

### tap `make` for all command for begin project
	- make build 
	- make start
	or
	- make help
	
### Want to have node_modules on host side ? 
This will copy node modules inside a the running container to the host
- Run `make modules`

### Want to have yarn.lock on host side ? 
This will check and install missing dependencies and copy yarn.lock file from the running container to the host:
- Run `make yarnlock`


### Identifier admin : 
	- admin@admin.com
	- adminadmin

---

## TP

- :heavy_check_mark: Create a application in order to vote students projects.
- :heavy_check_mark: Create a development environment for the project.

## Frontend quick definition:

- Admin can choose to add or remove questions for every project.
- Admin can enter project name somewhere.
- Admin cannot change vote option (1 to 10, with 0,5 increase).
  **Example** - 0 - 0.5 - 1 - 1.5 etc ...
- Not necessary backoffice for admin, it can be a configuration file only for questions, project names.
- Export results with a command (makefile)

**Example for a voting user:**

> - Vue 1: Enter your name (no connexion).

> - Vue 2:
>   Project name: Dentiio
>
> Question 1: Interested into following ?
> Vote 1 to 10.
> Button > Next Question
>
> Question 2: Interested into sponsoring ?
> Vote 1 to 10.  
> Submit button.

> - Vue 2:
>   Project name: Hubbies Puppies
>
> Question 1: Interested into following ?
> Vote 1 to 10.
> Button > Next Question
>
> Question 2: Interested into sponsoring ?
> Vote 1 to 10.  
> Submit button.

> - Vue 3: Thank you.

## :red_circle: Obligations

- :octocat: Github Flow (PR mandatory).
- :open_book: Respect Github open source guidelines.
- :wavy_dash: Comment each line of the Dockerfile or docker-compose files.
- :100: Complete README to initialize the project.
- :lock: Use only official Docker Hub images and lock versions of your images.
- :no_entry: Mandatory services :
  - Language interpretor
  - Database
  - Apache or Nginx

## :gift: Bonus:

- :sob: Add unit testing to your app (TDD).
- :sob: Add a command to launch your tests inside containers.
- :outbox_tray: Create a prod environment for the project
- :scream: Push your docker on a vps or on heroku
- :muscle: Services :
  - Testing email service (MailHog)
  - Proxy (Traefik)
  - SSL certificat (Let's Encrypt) :warning: you need a domain name
