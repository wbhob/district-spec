# District Specification
------------

District is our response to some criticisms of the design of Nest, a framework that uses Angular's syntax and DI to make servers. Our primary motivation is to address some of the concerns in my medium post (https://medium.com/@wilsonhobbs/nest-is-really-good-but-nest-could-be-so-much-better-2556b390305b) to create a more democratic and focused server framework.

In this repository, we'll be doing some preliminary designs for naming and planning out a sample project. After several weeks of planning, we'll begin focusing on scaffolding out the main District project.

We are looking for community input and contribution. If you are a user of Nest, and have filed issues that have been marked as "not being fixed", we need your input to make District a viable project. We are also looking for one or two more core contributors, so if you're interested, please open an issue or message Wilson Hobbs (@wbhob) or Shady Khalifa (@shekohex) on Twitter.


## Philosophy
The philosophy of District is to be a democratically-maintained, all-in-one solution for building your app servers with less code than you would otherwise with Express or some other framework. There is a heavy emphasis on the Object-Oriented features of Node.JS and TypeScript, but some functional principles will be introduced as well.

We also intend to take advantage of TypeScript's decorators for a simplified API over simply using functions (like in Express - `app.get()`, for example).

We also think it's important for District to adapt to whatever backend framework you used before. So eventually, if you used Express, you can use the Express adapter. If you used hapi, District will be adapted to support hapi req/res objects and middlewares.

## Packages
Creating backend applications requires a lot of adapters, and packages. That's why, in addition to just servers, we intend on creating packages to connect to databases – we are open to a wide variety of packages and adapters, but we need your feedback for that as well.

### Packages we will create
- `@district/core` - core functionality to build a basic server
- `@district/router` - more advanced routing capability than would otherwise be in Core
- `@district/mongo` - MongoDB adapter, with typechecking and decorator support
- `@district/sql` - Adapters for SQL databases. **NOTE: I am not primarily a SQL developer, so we need community input on whether we need adapters for different types of SQL dbs (Postgres, MySQL, MS SQL, etc.)**
- `@district/testing` - testing framework, TBD. Not a priority, but necessary eventually.
- Middlewares (TBD) - middleware adapters for common express middlewares

### Packages we will NOT create
- `@district/common` - it is illogical to separate core functionality into two packages
- Support for non-standard protocols - this is not the core focus of the framework, and only complicates it
- Support for WebSockets - this is not the core focus of the framework, and only complicates it

## Contributing to this Spec
If you like this project, but have some ideas of your own, please please PLEASE make a PR or an issue. We want to make as many people happy as we can, and your feedback MATTERS! We'll carefully review everything that comes our way.

Thanks, everyone, and welcome to the District community!
