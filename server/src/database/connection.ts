import knex from 'knex';
import path from 'path'; //para criar caminhos sem necessidades do uso de / pois no wind usa-se \ invertida, então com path não há preocupação

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;