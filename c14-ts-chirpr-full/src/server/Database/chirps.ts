import * as mysql from 'mysql';
import  Chirps from './chirps';




export const dbconnection = mysql.createConnection({
  host: "localhost",
  user: "chirperapp",
  password: "pass123",
  database: "c14chirpr"
});

export const Query =(query: string, values?: Array<string |number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
  dbconnection.query(query,values, (err, result) => {
    if (err) return reject(err);
    return resolve(result);
  });
});
};
export default {Chirps}