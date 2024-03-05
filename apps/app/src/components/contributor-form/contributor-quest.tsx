'use client';

import { Form, useFieldAnswer } from '@quillforms/renderer-core';
import '@quillforms/renderer-core/build-style/style.css';
// @ts-ignore
import { registerCoreBlocks } from '@quillforms/react-renderer-utils';
import React, { useState } from 'react';
import { isValidEthereumAddress } from '@/helpers/utils';

async function sendFormData(data: any) {
  try {
    const response = await fetch('/api/spreadsheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      return new Error(`error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('An error occured', error);
  }
}

registerCoreBlocks();
export default function ContributorQuest() {
  let [endMessage, setEndMessage] = useState('');

  const principle: any = useFieldAnswer('principle');
  const ensure_people: any = useFieldAnswer('ensure_people');

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Form
        formId={1}
        formObj={{
          blocks: [
            {
              name: 'welcome-screen',
              id: 'welcome',
              attributes: {
                label: 'Become swissDAO Contributor',
                description:
                  "Congratulations on your journey with swissDAO so far! You have earned your right to join the ranks of contributors. There's just one final quest standing between you and this exciting role, a quest that will showcase your readiness to join a guild, earn XP and AP with your contributions and actively shape the future of swissDAO and web3.",
                attachment: {
                  type: 'image',
                  url: '/logos/swissdao_logo.png'
                },
                attachmentMaxWidth: '300px'
              }
            },
            {
              name: 'short-text',
              id: 'ethereum_address',
              attributes: {
                label: 'Ethereum Wallet Address',
                required: true,
                placeholder: '0x...'
              }
            },
            {
              name: 'multiple-choice',
              id: 'principle',
              attributes: {
                required: true,
                verticalAlign: true,
                label: 'What is one of our principles?',
                choices: [
                  {
                    label: 'Meritocracy',
                    value: 'meritocracy'
                  },
                  {
                    label: 'Plutocracy',
                    value: 'plutocracy'
                  },
                  {
                    label: 'Democracy',
                    value: 'democracy'
                  }
                ]
              }
            },
            {
              name: 'multiple-choice',
              id: 'ensure_people',
              attributes: {
                required: true,
                verticalAlign: true,
                label:
                  'How do we ensure that active people have stronger voting power than inactive people?',
                choices: [
                  {
                    label:
                      'The core team distributes Voting Power to those who, in its opinion, are most active',
                    value: 'most_active'
                  },
                  {
                    label: "We don't, 1 Person = 1 Vote",
                    value: 'equal'
                  },
                  {
                    label: 'Experience Points and Activity Points',
                    value: 'experience_points'
                  }
                ]
              }
            },
            ...(principle?.includes('meritocracy') &&
            ensure_people?.includes('experience_points')
              ? [
                  {
                    name: 'statement',
                    id: 'won',
                    attributes: {
                      label: 'You passed the swissDAO Contributor quest!'
                    }
                  },
                  {
                    name: 'group',
                    id: 'group_name',
                    attributes: {
                      label: 'Please fill the following...'
                    },
                    innerBlocks: [
                      {
                        id: 'first_name',
                        name: 'short-text',
                        attributes: {
                          label: 'First Name',
                          required: true,
                          placeholder: 'Write your answer here!'
                        }
                      },
                      {
                        id: 'last_name',
                        name: 'short-text',
                        attributes: {
                          label: 'Last Name',
                          required: true,
                          placeholder: 'Write your answer here!'
                        }
                      },
                      {
                        id: 'email',
                        name: 'email',
                        attributes: {
                          label: 'Email',
                          required: true,
                          placeholder: 'Write your email here!'
                        }
                      }
                    ]
                  },
                  {
                    name: 'statement',
                    id: 'guilds',
                    attributes: {
                      label: 'Guilds',
                      description:
                        "Our Guilds for the heart of our community and our productive action. Every Guild has designated areas of expertise and together form an unbeatable community. If you're keen on a particular guild or multiple guilds, it is vital to familiarize yourself with the nuances and expectations of each one. Learn more about the Guilds here: [Insert Link]",
                      buttonText: 'Continue',
                      quotationMarks: false
                    }
                  },
                  {
                    name: 'multiple-choice',
                    id: 'community_choice',
                    attributes: {
                      required: true,
                      verticalAlign: true,
                      label:
                        'Which guilds are most appealing to you and are you considering to join?',
                      choices: [
                        {
                          label: 'Community',
                          value: 'Community'
                        },
                        {
                          label: 'Design',
                          value: 'Design'
                        },
                        {
                          label: 'Development',
                          value: 'Development'
                        },
                        {
                          label: 'Education',
                          value: 'Education'
                        },
                        {
                          label: 'Event',
                          value: 'Event'
                        },
                        {
                          label: 'Media',
                          value: 'Media'
                        },
                        {
                          label: 'Partnership',
                          value: 'Partnership'
                        },
                        {
                          label: 'Project',
                          value: 'Project'
                        },
                        {
                          label: 'Treasury',
                          value: 'Treasury'
                        }
                      ]
                    }
                  },
                  {
                    name: 'number',
                    id: 'hours_available',
                    attributes: {
                      required: true,
                      label:
                        'How much time do you have weekly available to contribute to swissDAO?'
                    }
                  },
                  {
                    name: 'statement',
                    id: 'survey_start',
                    attributes: {
                      label: 'Survey',
                      description:
                        'The last part is to better understand your goals and motivation behind joining swissDAO.',
                      buttonText: 'Continue',
                      quotationMarks: false
                    }
                  },
                  {
                    name: 'statement',
                    id: 'survey_title_motivation',
                    attributes: {
                      label: 'Motivation and Engagement',
                      buttonText: 'Continue',
                      quotationMarks: false
                    }
                  },
                  {
                    name: 'short-text',
                    id: 'survey_motivation_1',
                    attributes: {
                      label:
                        'How did you first hear about swissDAO and what motivated you to become a contributor?',
                      required: true
                    }
                  },
                  {
                    name: 'short-text',
                    id: 'survey_motivation_2',
                    attributes: {
                      label:
                        'Where were you when you decided to join swissDAO?',
                      required: true
                    }
                  },
                  {
                    name: 'short-text',
                    id: 'survey_motivation_3',
                    attributes: {
                      label:
                        'What specific skills or interests do you feel that you bring to the swissDAO community?',
                      required: true
                    }
                  },
                  {
                    name: 'multiple-choice',
                    id: 'survey_motivation_4',
                    attributes: {
                      label:
                        'How often do you actively participate in swissDAO activities/events?',
                      required: true,
                      verticalAlign: true,
                      choices: [
                        {
                          label: 'Weekly',
                          value: 'Weekly'
                        },
                        {
                          label: 'Bi-Weekly',
                          value: 'Bi-Weekly'
                        },
                        {
                          label: 'Monthly',
                          value: 'Monthly'
                        },
                        {
                          label: 'Occasionally',
                          value: 'Occasionally'
                        }
                      ]
                    }
                  },
                  {
                    name: 'long-text',
                    id: 'survey_motivation_5',
                    attributes: {
                      label:
                        'What are your expectations from swissDAO in terms of personal or professional growth?This question is required.',
                      required: true
                    }
                  },
                  {
                    name: 'long-text',
                    id: 'survey_motivation_6',
                    attributes: {
                      label:
                        'How likely are you to recommend joining swissDAO to others interested in web3, and what factors influence your recommendation?',
                      required: true
                    }
                  },
                  {
                    name: 'statement',
                    id: 'survey_title_project',
                    attributes: {
                      label: 'Project and Vision',
                      buttonText: 'Continue',
                      quotationMarks: false
                    }
                  },
                  {
                    name: 'short-text',
                    id: 'survey_project_1',
                    attributes: {
                      label: 'Where do you see swissDAO going?',
                      required: true
                    }
                  },
                  {
                    name: 'multiple-choice',
                    id: 'survey_project_2',
                    attributes: {
                      label:
                        'Which aspects of swissDAO are most appealing to you?',
                      required: true,
                      verticalAlign: true,
                      choices: [
                        {
                          label: 'Workshops and Education Classes',
                          value: 'Workshops and Education Classes'
                        },
                        {
                          label: 'Community Building Events',
                          value: 'Community Building Events'
                        },
                        {
                          label: 'Gaining Practical DAO Experience',
                          value: 'Gaining Practical DAO Experience'
                        },
                        {
                          label: 'Hackathons',
                          value: 'Hackathons'
                        },
                        {
                          label: 'Venture Building',
                          value: 'Venture Building'
                        }
                      ]
                    }
                  },
                  {
                    name: 'statement',
                    id: 'survey_title_experience',
                    attributes: {
                      label: 'Perception and Experience',
                      buttonText: 'Continue',
                      quotationMarks: false
                    }
                  },
                  {
                    name: 'slider',
                    id: 'survey_experience_1',
                    attributes: {
                      label:
                        'How would you rate the community feeling in swissDAO?',
                      required: true,
                      max: 10,
                      min: 1,
                      step: 1
                    }
                  },
                  {
                    name: 'long-text',
                    id: 'survey_experience_2',
                    attributes: {
                      label:
                        'Are there any particular challenges or pain points you have encountered while participating in swissDAO? If yes, please describe them.'
                    }
                  },
                  {
                    name: 'long-text',
                    id: 'survey_experience_3',
                    attributes: {
                      label:
                        'What kind of support or resources do you feel would enhance your involvement in swissDAO?'
                    }
                  },
                  {
                    name: 'multiple-choice',
                    id: 'final',
                    attributes: {
                      label:
                        'By clicking "YES" you accept that the data you gave us will be save.',
                      required: true,
                      verticalAlign: true,
                      choices: [
                        {
                          label: 'Yes',
                          value: 'Yes'
                        },
                        {
                          label: 'No',
                          value: 'No'
                        }
                      ]
                    }
                  }
                ]
              : [])
          ],
          settings: {
            animationDirection: 'vertical',
            disableWheelSwiping: false,
            disableNavigationArrows: false,
            disableProgressBar: true,
            showLettersOnAnswers: false,
            saveAnswersInBrowser: false
          },
          theme: {
            font: 'Roboto', //fontSize: MediaDevices,
            //fontLineHeight: MediaDevices,
            backgroundColor: '#000000',
            backgroundImage: '' /*backgroundImageFocalPoint: {
                            x: number,
                            y: number,
                        },*/,
            logo: { src: '/logos/swissdao_logo.png' },
            questionsColor: '#ffffff',
            questionsLabelFont: 'Roboto', //questionsLabelFontSize: MediaDevices,
            //questionsLabelLineHeight: MediaDevices,
            questionsDescriptionFont: 'Roboto', //questionsDescriptionFontSize: MediaDevices,
            //questionsDescriptionLineHeight: MediaDevices,
            answersColor: '#ffffff',
            buttonsFontColor: '#000000', //buttonsFontSize: MediaDevices,
            //questionsDescriptionMargin: MediaDevices,
            //textInputAnswers: MediaDevices,
            typographyPreset: 'md', //answersMargin: MediaDevices,
            /*buttonsPadding: {
                        top: MediaDevices,
                        bottom: MediaDevices,
                        left: MediaDevices,
                        right: MediaDevices,
                    },*/
            buttonsBgColor: '#ffffff',
            buttonsBorderRadius: 5,
            buttonsBorderWidth: 0,
            buttonsBorderColor: '#ffffff',
            errorsFontColor: '#000000',
            errorsBgColor: '#ffffff',
            progressBarFillColor: '#ffffff',
            progressBarBgColor: '#ffffff' //formFooterBgColor: MediaDevices,
          },
          messages: { 'block.defaultThankYouScreen.label': endMessage }
        }}
        beforeGoingNext={({
          setIsFieldValid,
          answers,
          goNext,
          setFieldValidationErr,
          setIsPending,
          setIsCurrentBlockSafeToSwipe,
          goToBlock,
          currentBlockId
        }: any) => {
          switch (currentBlockId) {
            case 'ethereum_address':
              if (isValidEthereumAddress(answers['ethereum_address'].value)) {
                setIsFieldValid('ethereum_address', true);
                setFieldValidationErr('ethereum_address', '');
                goNext();
              } else {
                setIsFieldValid('ethereum_address', false);
                setFieldValidationErr(
                  'ethereum_address',
                  'Please enter a valid Ethereum address'
                );
                setIsPending(false);
                setIsCurrentBlockSafeToSwipe(false);
                goToBlock('ethereum_address');
              }
              break;
            default:
              goNext();
              break;
          }
        }}
        onSubmit={(data: any, { completeForm, setIsSubmitting }) => {
          const principle =
            data.answers['principle']['value'][0] === 'meritocracy';
          const ensure_people =
            data.answers['ensure_people']['value'][0] === 'experience_points';
          const ethereum_address = isValidEthereumAddress(
            data.answers['ethereum_address'].value
          );

          const isSuccessful = ethereum_address && principle && ensure_people;

          isSuccessful
            ? setEndMessage(
                'You passed the swissDAO Contributor quest!<br>We will get in touch soon.'
              )
            : setEndMessage('You failed the swissDAO Contributor quest!');
          if (isSuccessful) sendFormData(data.answers);
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 1000);
        }}
        applyLogic={false}
      />
    </div>
  );
}
