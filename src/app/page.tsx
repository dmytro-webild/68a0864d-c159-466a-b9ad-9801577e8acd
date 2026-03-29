"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="blurBottom"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reserve",
          id: "reserve",
        },
      ]}
      brandName="2K Restaurant"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      title="Authentic Ugandan Dining in Kampala"
      description="Experience the true taste of home. Halal local cuisine, all-you-can-eat specials, and private dining on Hoima Road. Open until 11 PM today."
      buttons={[
        {
          text: "Call Now",
          href: "tel:+256XXXXXXXXXX",
        },
        {
          text: "Book a Table",
          href: "#reserve",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/served-table-restaurant_93675-129573.jpg"
      imageAlt="2K Restaurant interior atmosphere"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-man-feeding-his-girlfriend-with-cake-cafe_637285-9125.jpg",
          alt: "Guest 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-dining-table-while-communicating-with-her-husband_637285-3516.jpg",
          alt: "Guest 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-businesswoman-celebrating-major-project-milestone_482257-123650.jpg",
          alt: "Guest 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/group-young-people-having-lunch-talking-each-other-pub-focus-is-happy-woman_637285-4087.jpg",
          alt: "Guest 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/midsection-waiter-serving-two-dishes-wooden-table_181624-54414.jpg",
          alt: "Guest 5",
        },
      ]}
      avatarText="Join 1,600+ happy diners"
      marqueeItems={[
        {
          type: "text",
          text: "Authentic Flavors",
        },
        {
          type: "text",
          text: "Halal Certified",
        },
        {
          type: "text",
          text: "Family Friendly",
        },
        {
          type: "text",
          text: "Fresh Ingredients",
        },
        {
          type: "text",
          text: "Local Kampala Staple",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Story"
      description="2K Restaurant is a beloved Kampala staple, bringing together the community through authentic, Halal Ugandan cuisine. We prioritize local recipes, warm hospitality, and a welcoming environment for families and professionals alike."
      metrics={[
        {
          value: "1600+",
          title: "Reviews",
        },
        {
          value: "4.2",
          title: "Rating",
        },
        {
          value: "11PM",
          title: "Closing",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/midsection-waiter-serving-two-dishes-wooden-table_181624-54414.jpg"
      imageAlt="2K Restaurant authentic cooking"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "dish1",
          name: "Pilao",
          brand: "Special",
          price: "15,000 UGX",
          rating: 5,
          reviewCount: "450+",
          imageSrc: "http://img.b2bpic.net/free-photo/traditional-azerbaijan-dish-served-with-yogurt-wooden-board-with-cutlery_114579-4522.jpg",
          imageAlt: "Pilao",
        },
        {
          id: "dish2",
          name: "Luwombo",
          brand: "Signature",
          price: "20,000 UGX",
          rating: 5,
          reviewCount: "600+",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-goulash-stew-table_23-2149371726.jpg",
          imageAlt: "Luwombo",
        },
        {
          id: "dish3",
          name: "Groundnut Stew",
          brand: "Traditional",
          price: "12,000 UGX",
          rating: 5,
          reviewCount: "320+",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-vegetable-mexican-salad_23-2148224139.jpg",
          imageAlt: "G-nuts",
        },
      ]}
      title="Popular Dishes"
      description="From traditional Pilao to our signature Luwombo, explore the best of our local Ugandan menu."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split-description"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Amazing Food",
          quote: "The Luwombo here is truly authentic. Best meal in Kampala!",
          name: "Sarah",
          role: "Local Resident",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-man-feeding-his-girlfriend-with-cake-cafe_637285-9125.jpg",
        },
        {
          id: "2",
          title: "Great Spot",
          quote: "Fantastic service and even better food. Love the atmosphere.",
          name: "David",
          role: "Professional",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-dining-table-while-communicating-with-her-husband_637285-3516.jpg",
        },
        {
          id: "3",
          title: "Family Friendly",
          quote: "Perfect place for a Sunday meal with the whole family.",
          name: "Martha",
          role: "Mother",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businesswoman-celebrating-major-project-milestone_482257-123650.jpg",
        },
        {
          id: "4",
          title: "Authentic Taste",
          quote: "You haven't tasted real G-nuts until you've eaten here.",
          name: "John",
          role: "Tourist",
          imageSrc: "http://img.b2bpic.net/free-photo/group-young-people-having-lunch-talking-each-other-pub-focus-is-happy-woman_637285-4087.jpg",
        },
        {
          id: "5",
          title: "Top Quality",
          quote: "Consistently great Ugandan dishes. Highly recommended.",
          name: "Peter",
          role: "Foodie",
          imageSrc: "http://img.b2bpic.net/free-photo/midsection-waiter-serving-two-dishes-wooden-table_181624-54414.jpg",
        },
      ]}
      title="What Our Guests Say"
      description="Join over 1,600+ happy customers who make 2K Restaurant their top choice for local food."
    />
  </div>

  <div id="reserve" data-section="reserve">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Reserve Your Table"
      description="Secure your spot during peak hours. Fill out the form or give us a call to book your private dining experience today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
          required: true,
        },
        {
          name: "date",
          type: "date",
          placeholder: "Date",
          required: true,
        },
        {
          name: "guests",
          type: "number",
          placeholder: "Number of Guests",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Special requests or catering needs",
        rows: 4,
      }}
      buttonText="Reserve Your Table"
      imageSrc="http://img.b2bpic.net/free-photo/midsection-waiter-serving-two-dishes-wooden-table_181624-54414.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/served-table-restaurant_93675-129573.jpg"
      columns={[
        {
          title: "Contact",
          items: [
            {
              label: "Hoima Rd, Kampala",
              href: "#",
            },
            {
              label: "Call Us",
              href: "tel:+256XXXXXXXXXX",
            },
          ],
        },
        {
          title: "Hours",
          items: [
            {
              label: "Mon-Sun: 10AM - 11PM",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Facebook",
              href: "#",
            },
            {
              label: "TikTok",
              href: "#",
            },
          ],
        },
      ]}
      logoText="2K Restaurant"
      copyrightText="© 2025 2K Restaurant"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
