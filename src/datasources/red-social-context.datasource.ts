import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'RedSocialContext',
  connector: 'postgresql',
  url: '',
  host: 'enviosecuador.net',
  port: 5432,
  user: 'postgres',
  password: 'danielsalcedo',
  database: 'RedSocial',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RedSocialContextDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'RedSocialContext';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.RedSocialContext', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
