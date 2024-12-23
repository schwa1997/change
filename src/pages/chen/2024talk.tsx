import React from "react";
import Layout from "@theme/Layout";

const WorkoutTalk: React.FC = () => {
  const styles = {
    blogContainer: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "2rem",
    },
    section: {
      marginBottom: "2rem",
    },
    heading1: {
      fontSize: "2.5rem",
      marginBottom: "2rem",
    },
    heading2: {
      fontSize: "2rem",
      margin: "1.5rem 0",
    },
    heading3: {
      fontSize: "1.75rem",
      margin: "1.25rem 0",
    },
    heading4: {
      fontSize: "1.5rem",
      margin: "1.25rem 0",
    },
    paragraph: {
      lineHeight: 1.6,
      marginBottom: "1rem",
    },
    list: {
      paddingLeft: "2rem",
      marginBottom: "1rem",
    },
    listItem: {
      marginBottom: "0.5rem",
    },
  } as const;

  return (
    <Layout>
      <div style={styles.blogContainer}>
        <h1 style={styles.heading1}>
          Workout, Diet & TMI Talk with Myself for 2024 Grind
        </h1>

        <section style={styles.section}>
          <h2 style={styles.heading2}>
            My Fitness Journey: From Strength Training to Mix-and-Match
          </h2>
          <h4 style={styles.heading4}>Looking Back at My Strength Training</h4>
          <p style={styles.paragraph}>
            I first got into strength training while I was in Padua, Italy. It
            started after I recovered from some back pain. I kept at it until
            last month, when I had to stop because my knee was acting up and I
            wasn't feeling great mentally.
          </p>

          <ul style={styles.list}>
            <li style={styles.listItem}>
              Legs are my strong point, but back exercises are tricky - I have
              trouble feeling the right muscles working. My desk job and bad
              posture give me pain in my upper back. Chest exercises come easy
              to me (I'm pretty good at pushups!), but my shoulders are still
              weak and stiff.
            </li>
            <li style={styles.listItem}>
              My favorite exercises? Deadlifts and anything with gym equipment!
            </li>
          </ul>

          <h4 style={styles.heading4}>What I Learned in 2024</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Focused on <strong>strength training</strong> after recovering
              from lower back pain.
            </li>
            <li style={styles.listItem}>
              Gained muscle and strength but experienced joint pain and
              work-related injuries persisted.
            </li>
            <li style={styles.listItem}>
              Now seeking a more flexible, engaging routine with varied
              activities.
            </li>
          </ul>

          <h4 style={styles.heading4}>
            My Fun Mix-and-Match Workout Plan for 2024
          </h4>
          <ol style={styles.list}>
            {[
              "Running + Core Work: Basic cardio and ab exercises, 1-2 times a week",
              "Gym Time: Full-body workout with the basics (squats, deadlifts, rows), 1-2 times a week",
              "Running Goals: Getting ready for serious running training in 2025, 1-2 times a week",
              "Power + HIIT: Upper body exercises mixed with quick cardio bursts, 1-2 times a week",
              "Fun Stuff: Dancing, hiking, or trying something new! Hoping to find a dance class (2x weekly)",
              "Rest Days: Taking it easy with stretching, gentle yoga, or swimming, 1-2 times a week",
            ].map((item, index) => (
              <li key={index} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading2}>
            Food Talk: Getting Better at Eating Well
          </h2>
          <p style={styles.paragraph}>
            I'm getting better at understanding food, but sometimes it's still
            hard to make the right choices!
          </p>

          <h4 style={styles.heading4}>What's Going Well:</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Making smarter food picks (like choosing tea instead of coffee)
            </li>
            <li style={styles.listItem}>
              My stomach feels much better since moving to Spain - no more
              bloating!
            </li>
            <li style={styles.listItem}>
              I can tell when I'm actually full now
            </li>
          </ul>

          <h4 style={styles.heading4}>Areas for Improvement:</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Portion control - adjusting intake for my current metabolic rate
            </li>
            <li style={styles.listItem}>
              Increased snacking habits compared to previous routines
            </li>
            <li style={styles.listItem}>
              Managing cravings for meat and fried foods
            </li>
          </ul>

          <h4 style={styles.heading4}>Positive Changes:</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Making smarter choices through minimalism
            </li>
            <li style={styles.listItem}>Better food quality discrimination</li>
            <li style={styles.listItem}>
              Cooking healthier meals while maintaining enjoyment
            </li>
            <li style={styles.listItem}>
              Maintaining a positive relationship with food
            </li>
          </ul>
          <h4 style={styles.heading4}>I can eat heathier and better in 2025</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Practice mindful eating and portion control.
            </li>
            <li style={styles.listItem}>cut off suguars mindfully</li>
            <li style={styles.listItem}>
              Cooking healthier meals while maintaining enjoyment
            </li>
            <li style={styles.listItem}>
              be open minded about more diet approach and whatever works, works.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading2}>Personal Stuff</h2>
          <h3 style={styles.heading3}>Friends, Dating, and Growing Up</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Explored casual relationships and gained valuable experiences
            </li>
            <li style={styles.listItem}>
              Developed meaningful friendships, especially with my close friend
              ("laopo")
            </li>
            <li style={styles.listItem}>
              Deepened understanding of feminism and societal structures
            </li>
          </ul>

          <h4 style={styles.heading4}>Career & Personal Growth</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Transitioning family relationships to a comfortable distance
            </li>
            <li style={styles.listItem}>
              Exploring entrepreneurship opportunities
            </li>
            <li style={styles.listItem}>
              Developing investment strategies and financial literacy
            </li>
          </ul>

          <h4 style={styles.heading4}>Challenges & Learnings</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Navigating university bureaucracy and internship complications
            </li>
            <li style={styles.listItem}>
              Developing better judgment in trust and relationships
            </li>
            <li style={styles.listItem}>
              Managing financial challenges in European society
            </li>
            <li style={styles.listItem}>
              Use energy more smartly and pay great attention to health
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default WorkoutTalk;
