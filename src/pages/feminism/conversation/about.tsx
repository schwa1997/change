import React from "react";

const TitanicDiscussionPage: React.FC = () => {
  return (
    <div className="prose max-w-3xl mx-auto py-8 px-4">
      <h1>Is this truly discrimination?</h1>
      <ol>
        <li>
          <strong>Topic Origin</strong>:
          <p>
            You discussed the evacuation order of the <strong>Titanic</strong> -
            children and the elderly first, then women, and finally men.
          </p>
        </li>

        <li>
          <strong>Your Friend&apos;s View</strong>:
          <p>
            Your friend believes this evacuation order is{" "}
            <strong>discrimination against men</strong>, as they are forced to
            take on the sacrificial role.
          </p>
        </li>

        {/* ... Rest of the numbered list items following the same pattern ... */}
      </ol>
      <h2>In 2024, should we still follow the Titanic evacuation order?</h2>

      <h3>Ideally:</h3>
      <div>
        <h4>Evolving Gender Roles:</h4>
        <ul>
          <li>
            Traditional gender roles have significantly changed since the
            Titanic era
          </li>
          <li>
            Women now serve in military, emergency services, and leadership
            positions
          </li>
          <li>Men are increasingly involved in caregiving roles</li>
        </ul>

        {/* ... Rest of the "Ideally" section following the same pattern ... */}
      </div>
      <h3>Realistically:</h3>
      <div>
        <h4>Social Expectations Persist:</h4>
        <ul>
          <li>Traditional gender roles still influence public perception</li>
          <li>
            Men may face social stigma for prioritizing their safety over
            women&apos;s
          </li>
          <li>Cultural norms change slower than official policies</li>
        </ul>

        {/* ... Rest of the "Realistically" section following the same pattern ... */}
      </div>
    </div>
  );
};

export default TitanicDiscussionPage;
