'use client';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import VChart from '@/components/ui/VChart';
import { useAddProfileMutation, useProfileQuery } from '@/redux/api/profile';
import { Col, Row, Card, Button, Empty } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const ProfilePage = () => {
  const [addProfile] = useAddProfileMutation();
  const { data } = useProfileQuery(undefined);

  useEffect(() => {
    addProfile(undefined);
  }, [addProfile]);

  return (
    <div>
      <div className=' '>
        <UMBreadCrumb
          items={[
            {
              label: 'admin',
              link: '/admin',
            },
          ]}
        />

        <div className=' md:max-w-2xl mt-4  mx-auto'>
          <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 text-base font-normal '>
            <div className=''>
              {data?.profile?.profileImage ? (
                <Image
                  src={data?.profile?.profileImage}
                  width={200}
                  height={300}
                  alt='eagle_image'
                  className=' rounded-md w-full h-auto object-cover object-center  '
                />
              ) : (
                <Empty description='Profile image not updated ' />
              )}
            </div>

            <div className='bg-white p-4 grow rounded-md'>
              <div className='pb-4  '>
                <b className='w-[30%] inline-block'>Name</b>
                <span>
                  {data?.profile?.firstName} {data?.profile?.middleName}
                  {data?.profile?.lastName}
                </span>
              </div>
              <div className='pb-4 '>
                <b className='w-[30%] inline-block'>Email</b>
                <span>{data?.profile?.useEmail}</span>
              </div>
              <div className='pb-4'>
                <b className='w-[30%] inline-block'>Role</b>
                <span>{data?.profile?.role}</span>
              </div>
              <div className='pb-4'>
                <b className='w-[30%] inline-block'>Contact</b>
                <span>{data?.profile?.contactNo}</span>
              </div>
              <div>
                <b className='block mb-2'>Bio</b>
                <p>{data?.profile?.bio}</p>
              </div>
            </div>
          </div>
          <div className='flex  justify-end mt-4'>
            <Link href='/admin/profile/edit/'>
              <Button className=' bg-secondary     text-white '>
                Update Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
