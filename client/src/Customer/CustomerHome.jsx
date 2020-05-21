import React from 'react'
import Footer from './shared/Footer'
import Nav from './shared/Nav'
import MessageCard from './components/MessageCard/MessageCard'
import SplashImageCard from './components/SplashImageCard/SplashImageCard'
import citrus from '../assets/images/citrus.jpg'
import shelf from '../assets/images/shelf.jpg'
import './CustomerHome.scss'

import Layout from './shared/Layout'

import HomeBody from '../Customer/components/HomeBody/HomeBody'


export default function CustomerHome() {
  return (

    <Layout>
      <div className="customer-home">
      <MessageCard img={citrus}
        title='Meals for a Good Cause'
        alt='citrus'
        message='These hearty, homestyle entrees, veggies,
      and soups from Restaurant Associates
      Kitchen are more than just a great, fully-
      prepped meal option. For every meal'/>

      <HomeBody feature='top'/>

      <SplashImageCard />

      <HomeBody feature='bottom'/>

      <MessageCard img={shelf}
        alt='shelf'
        title={`Help NYC's Most Vulnerable`}
        message={`We’re proud to partner with NY Common
       Pantry whose mission is to reduce hunger`} />
      </div>
    </Layout>

  )
}
