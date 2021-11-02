import { selectRefactored } from '../config/query.js';
import { verify } from '../config/token.js';
/**
 * Checks authorization header, then calls select method from query.js to get all registries from db.
 * Responds with result, 400 or 401.
 * @param {object} req 
 * @param {object} res 
 * @param {string} table
 */
export const readRequest = (req, res, table) => {
  verify(req)
    .then(() => {
      selectRefactored(['*'], table, {})
        .then(result => res.send(result))
        .catch(err => res.sendStatus(400));
    }).catch(err => res.sendStatus(401))
};