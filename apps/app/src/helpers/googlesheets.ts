import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Config variables
// eslint-disable-next-line turbo/no-undeclared-env-vars
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID || '';
// eslint-disable-next-line turbo/no-undeclared-env-vars
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID || 0;
// eslint-disable-next-line turbo/no-undeclared-env-vars
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
// eslint-disable-next-line turbo/no-undeclared-env-vars
const GOOGLE_SERVICE_PRIVATE_KEY =
  process.env.GOOGLE_SERVICE_PRIVATE_KEY?.replace(/\\n/g, '\n');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const jwtFromEnv = new JWT({
  email: GOOGLE_CLIENT_EMAIL,
  key: GOOGLE_SERVICE_PRIVATE_KEY,
  scopes: SCOPES
});
const doc = new GoogleSpreadsheet(SPREADSHEET_ID, jwtFromEnv);

export interface Row {
  eth_address: string;
  principle: string;
  ensure_people: string;
  first_name: string;
  last_name: string;
  email: string;
  community_choice: string;
  hours_available: string;
  survey_motivation_1: string;
  survey_motivation_2: string;
  survey_motivation_3: string;
  survey_motivation_4: string;
  survey_motivation_5: string;
  survey_motivation_6: string;
  survey_project_1: string;
  survey_project_2: string;
  survey_experience_1: string;
  survey_experience_2: string;
  survey_experience_3: string;
}

interface FormField<T> {
  value: T;
  isValid: boolean;
  isAnswered: boolean;
  isPending: boolean;
  validationErr: string | null;
  isCorrectIncorrectScreenDisplayed: boolean;
  isLocked: boolean;
  blockName: string;
}

export interface IForm {
  ethereum_address: FormField<string>;
  principle: FormField<string[]>;
  ensure_people: FormField<string[]>;
  community_choice: FormField<string[]>;
  hours_available: FormField<number>;
  survey_motivation_1: FormField<string>;
  survey_motivation_2: FormField<string>;
  survey_motivation_3: FormField<string>;
  survey_motivation_4: FormField<string[]>;
  survey_motivation_5: FormField<string>;
  survey_motivation_6: FormField<string>;
  survey_project_1: FormField<string>;
  survey_project_2: FormField<string[]>;
  survey_experience_1: FormField<number>;
  survey_experience_2: FormField<string>;
  survey_experience_3: FormField<{}>;
  first_name: FormField<string>;
  last_name: FormField<string>;
  email: FormField<string>;
}

// Append Function
export const appendSpreadsheet = async (row: Row) => {
  try {
    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsById[Number(SHEET_ID)];
    await sheet.setHeaderRow([
      'eth_address',
      'principle',
      'ensure_people',
      'first_name',
      'last_name',
      'email',
      'community_choice',
      'hours_available',
      'survey_motivation_1',
      'survey_motivation_2',
      'survey_motivation_3',
      'survey_motivation_4',
      'survey_motivation_5',
      'survey_motivation_6',
      'survey_project_1',
      'survey_project_2',
      'survey_experience_1',
      'survey_experience_2',
      'survey_experience_3'
    ]);
    await sheet.addRow({ ...row });
  } catch (e) {
    console.error('Error: ', e);
  }
};
