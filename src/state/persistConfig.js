import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // importez le moyen de stockage que vous souhaitez utiliser (par exemple, localStorage)

const persistConfig = {
  key: 'root', // La clé racine pour stocker dans le stockage local
  storage, // Le moyen de stockage que vous avez importé
  whitelist: [  'firstName',
  'lastName',
  'dateOfBirth',
  'startDate',
  'department',
  'street',
  'city',
  'state',
  'zipCode'], 
  // blacklist: [], // Vous pouvez également utiliser blacklist pour exclure certains reducers de la persistance
};

export default persistConfig;
