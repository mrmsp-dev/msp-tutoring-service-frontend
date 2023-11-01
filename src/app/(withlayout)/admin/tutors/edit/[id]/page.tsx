'use client';

import CategoryField from '@/components/Forms/CategoryField';
import Form from '@/components/Forms/Form';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import FormTextArea from '@/components/Forms/FormTextArea';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import {
  genderOptions,
  locationOptions,
  serviceStatus,
} from '@/constants/global';
import {
  useServiceQuery,
  useUpdateServiceMutation,
} from '@/redux/api/serviceApi';
import { useTutorQuery, useUpdateTutorMutation } from '@/redux/api/tutorApi';

import { Button, Col, Row, message } from 'antd';

const EditServicePage = ({ params }: any) => {
  const { data: tutorData, isLoading: loading } = useTutorQuery(params?.id);
  //   console.log(tutorData);
  const [updateTutor] = useUpdateTutorMutation();

  //@ts-ignore

  const onSubmit = async (values: any) => {
    const price = parseFloat(values.price);

    try {
      const res = await updateTutor({
        id: params?.id,
        body: values,
      }).unwrap();
      // console.log(res);
      if (res?.id) {
        message.success('Tutor Successfully Updated!');
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    firstName: tutorData?.firstName || '',
    middleName: tutorData?.middleName || '',
    lastName: tutorData?.lastName || '',
    experience: tutorData?.experience || '',
    bio: tutorData?.bio || '',
    imageUrl: tutorData?.imageUrl || '',
    gender: tutorData?.gender || '',
  };
  const base = 'admin';
  return (
    <>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: 'tutors', link: `/${base}/tutors` },
        ]}
      />
      <h1>Update Tutor</h1>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <div
          style={{
            border: '1px solid #d9d9d9',
            borderRadius: '5px',
            padding: '15px',
            marginBottom: '10px',
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: '500', margin: '5px 0px' }}>
            Tutor information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: '10px 0' }}>
              <FormInput name='firstName' label='First Name' size='large' />
            </Col>
            <Col span={8} style={{ margin: '10px 0' }}>
              <FormInput name='middleName' label='Middle Name' size='large' />
            </Col>
            <Col span={8} style={{ margin: '10px 0' }}>
              <FormInput name='lastName' label='Last Name' size='large' />
            </Col>

            <Col span={8} style={{ margin: '10px 0' }}>
              <FormInput
                name='imageUrl'
                label='Image Url'
                size='large'
                type='url'
              />
            </Col>

            <Col span={8} style={{ margin: '10px 0' }}>
              <FormInput name='experience' label='Experience' size='large' />
            </Col>
            <Col span={8} style={{ margin: '10px 0' }}>
              <FormSelectField
                size='large'
                name='gender'
                options={genderOptions}
                label='Gender'
                placeholder='Select'
              />
            </Col>

            <Col span={16} style={{ margin: '10px 0' }}>
              <FormTextArea name='bio' label='Bio' rows={4} />
            </Col>
          </Row>
          <Button htmlType='submit'>Create</Button>
        </div>
      </Form>
    </>
  );
};

export default EditServicePage;