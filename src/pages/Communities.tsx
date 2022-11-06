import axios from 'axios'
import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { DUMMY_INTERESTS } from '../dummy_interests'

const getInterests = (community: any) =>
  DUMMY_INTERESTS.filter((dummyInterest) =>
    community.interests.some((communityInterest: any) => dummyInterest.value === communityInterest.value)
  )
    .map((dummyInterest) => dummyInterest.label)
    .join(', ')

const Communities = () => {
  const [allCommunities, setAllCommunities] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const {
        data: { communities },
      } = await axios.get('http://localhost:8000/communities')
      setAllCommunities(communities)
    })()
  }, [])

  const handleSubscribe = async (community: any) => {
    const community_id = community._id;
    const profile_id  = '63673b3499617eba8c396735';
    const result = await axios.post('http://localhost:8000/communities/subscribe', {community_id, profile_id})
    alert("Subscribed Successfully to " + community.name)
  }

  return (
    <div>
      <Card title="Communities">
        {allCommunities.map((community: any) => (
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{community.name}</p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">{getInterests(community)}</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <Button type="button" onClick={async () => {await handleSubscribe(community)}}>
                    subscribe
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </Card>
    </div>
  )
}

export default Communities
