import { appendSpreadsheet, Row, IForm } from '@/helpers/googlesheets';

function submitForm(data: IForm) {
  let row: Row = {
    eth_address: '',
    principle: '',
    ensure_people: '',
    first_name: '',
    last_name: '',
    email: '',
    community_choice: '',
    hours_available: '',
    survey_motivation_1: '',
    survey_motivation_2: '',
    survey_motivation_3: '',
    survey_motivation_4: '',
    survey_motivation_5: '',
    survey_motivation_6: '',
    survey_project_1: '',
    survey_project_2: '',
    survey_experience_1: '',
    survey_experience_2: '',
    survey_experience_3: ''
  };
  for (const [key, value] of Object.entries(data)) {
    switch (key) {
      case 'ethereum_address':
        row.eth_address = value.value;
        break;
      case 'principle':
        row.principle = value.value[0];
        break;
      case 'ensure_people':
        row.ensure_people = value.value[0];
        break;
      case 'first_name':
        row.first_name = value.value;
        break;
      case 'last_name':
        row.last_name = value.value;
        break;
      case 'email':
        row.email = value.value;
        break;
      case 'community_choice':
        row.community_choice = value.value[0];
        break;
      case 'hours_available':
        row.hours_available = value.value;
        break;
      case 'survey_motivation_1':
        row.survey_motivation_1 = value.value;
        break;
      case 'survey_motivation_2':
        row.survey_motivation_2 = value.value;
        break;
      case 'survey_motivation_3':
        row.survey_motivation_3 = value.value;
        break;
      case 'survey_motivation_4':
        row.survey_motivation_4 = value.value[0];
        break;
      case 'survey_motivation_5':
        row.survey_motivation_5 = value.value;
        break;
      case 'survey_motivation_6':
        row.survey_motivation_6 = value.value;
        break;
      case 'survey_project_1':
        row.survey_project_1 = value.value;
        break;
      case 'survey_project_2':
        row.survey_project_2 = value.value[0];
        break;
      case 'survey_experience_1':
        row.survey_experience_1 = value.value;
        break;
      case 'survey_experience_2':
        row.survey_experience_2 = value.value;
        break;
      case 'survey_experience_3':
        row.survey_experience_3 = value.value;
        break;
    }
  }
  appendSpreadsheet(row).then(() => {
    console.log('Appended');
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    submitForm(body);
    return new Response(
      JSON.stringify({ result: 'New user added to sheet.' }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
