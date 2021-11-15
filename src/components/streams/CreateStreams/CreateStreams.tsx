import * as React from 'react';
import {
  SimpleForm,
  TextInput,
  Create,
  DateInput,
  DateTimeInput,
} from 'react-admin';

const dateFormatter = (v: Date) => {
  console.log('dateFormatter', v);
  if (!(v instanceof Date) || isNaN(Number(v))) return;
  const pad = '00';
  const yy = v.getFullYear().toString();
  const mm = (v.getMonth() + 1).toString();
  const dd = v.getDate().toString();
  console.log(
    'dateFormatterReturn',
    `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`
  );
  return `2000-01-01T00:00:00Z`;
};

// const dateParser = (v: string) => {
//   console.log('dateParser', v);
//   const match = /(\d{4})-(\d{2})-(\d{2})/.exec(v);
//   if (match === null) return;
//   const d = new Date(
//     Number(match[1]),
//     parseInt(match[2], 10) - 1,
//     Number(match[3])
//   );
//   if (isNaN(Number(d))) return;
//   console.log('dateParserReturn', d);
//   return d;
// };

const dateParser = (v: any) => {
  const regexp = /(\d{4})-(\d{2})-(\d{2})/;
  let match = regexp.exec(v);
  if (match === null) return;

  let year = match[1];
  let month = match[2];
  let day = match[3];
  let hour = '00';
  let min = '00';

  const date = [year, month, day].join('-');
  const time = [hour, min].join(':');
  const result = date + 'T' + time + 'Z';
  console.log('result', result);
  return result;
};

const CreateStreams: React.FC = ({ ...props }: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="category" />
        <TextInput source="title" />
        <TextInput source="youtube_id" />
        <TextInput source="description" />
        <DateTimeInput source="published_at" />
      </SimpleForm>
    </Create>
  );
};

export default CreateStreams;
