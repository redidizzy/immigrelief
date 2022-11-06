import React, { MouseEventHandler } from 'react'
import Input from '../components/Input'
import Select from 'react-select'
import Button from '../components/Button'
import axios from 'axios'
import { DUMMY_INTERESTS } from '../dummy_interests'

const Profile = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [selectedInterests, setSelectedInterests] = React.useState<any[]>([])

  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const {
        data: { body: profile },
      } = await axios.get<any>('http://localhost:8000/profile')
      setFirstName(profile.firstName)
      setLastName(profile.lastName)
      setEmail(profile.email)
      setSelectedInterests(
        DUMMY_INTERESTS.filter(
          (interest) =>
            profile.interests.some((profileInterest: any) => interest.value === profileInterest.value) as any
        )
      )
    })()
  }, [])
  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await axios.post('http://localhost:8000/profile', {
      firstName,
      lastName,
      email,
      interests: selectedInterests.map((interest) => interest.value),
    })
    setIsLoading(false)
  }
  return (
    <div className="mt-10 sm:mt-0 ">
      <div className="md:grid md:grid-cols-3 md:gap-6 md:w-[50%]">
        <div className="mt-5 md:col-span-2 md:mt-0 md:mx-auto w-full ">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <Input label="First name" id="first-name" value={firstName} setValue={setFirstName} />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <Input label="Last name" id="last-name" value={lastName} setValue={setLastName} />
                    {lastName}
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <Input label="Email" id="email" value={email} setValue={setEmail} />
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue="sports"
                      value={selectedInterests}
                      isSearchable
                      name="interests"
                      options={DUMMY_INTERESTS as any}
                      menuPortalTarget={document.querySelector('body')}
                      isMulti
                      onChange={(values) => {
                        setSelectedInterests(values as any)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Button type="submit" onClick={handleClick}>
                  {isLoading ? 'Loading...' : 'Save'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Profile
