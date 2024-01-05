# `organizationSettings` Submodule <a name="`organizationSettings` Submodule" id="@cdktf/provider-github.organizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationSettings <a name="OrganizationSettings" id="@cdktf/provider-github.organizationSettings.OrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings github_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_settings

organizationSettings.OrganizationSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_email: str,
  advanced_security_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  blog: str = None,
  company: str = None,
  default_repository_permission: str = None,
  dependabot_alerts_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  dependabot_security_updates_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  dependency_graph_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  description: str = None,
  email: str = None,
  has_organization_projects: typing.Union[bool, IResolvable] = None,
  has_repository_projects: typing.Union[bool, IResolvable] = None,
  id: str = None,
  location: str = None,
  members_can_create_internal_repositories: typing.Union[bool, IResolvable] = None,
  members_can_create_pages: typing.Union[bool, IResolvable] = None,
  members_can_create_private_pages: typing.Union[bool, IResolvable] = None,
  members_can_create_private_repositories: typing.Union[bool, IResolvable] = None,
  members_can_create_public_pages: typing.Union[bool, IResolvable] = None,
  members_can_create_public_repositories: typing.Union[bool, IResolvable] = None,
  members_can_create_repositories: typing.Union[bool, IResolvable] = None,
  members_can_fork_private_repositories: typing.Union[bool, IResolvable] = None,
  name: str = None,
  secret_scanning_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  secret_scanning_push_protection_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  twitter_username: str = None,
  web_commit_signoff_required: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.billingEmail">billing_email</a></code> | <code>str</code> | The billing email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.advancedSecurityEnabledForNewRepositories">advanced_security_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not advanced security is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.blog">blog</a></code> | <code>str</code> | The blog URL for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.company">company</a></code> | <code>str</code> | The company name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.defaultRepositoryPermission">default_repository_permission</a></code> | <code>str</code> | The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependabotAlertsEnabledForNewRepositories">dependabot_alerts_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not dependabot alerts are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependabotSecurityUpdatesEnabledForNewRepositories">dependabot_security_updates_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not dependabot security updates are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependencyGraphEnabledForNewRepositories">dependency_graph_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not dependency graph is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.description">description</a></code> | <code>str</code> | The description for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.email">email</a></code> | <code>str</code> | The email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.hasOrganizationProjects">has_organization_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.hasRepositoryProjects">has_repository_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not repository projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreateInternalRepositories">members_can_create_internal_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new internal repositories. For Enterprise Organizations only. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePages">members_can_create_pages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePrivatePages">members_can_create_private_pages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new private pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePrivateRepositories">members_can_create_private_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePublicPages">members_can_create_public_pages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new public pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePublicRepositories">members_can_create_public_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new public repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreateRepositories">members_can_create_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanForkPrivateRepositories">members_can_fork_private_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can fork private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.secretScanningEnabledForNewRepositories">secret_scanning_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not secret scanning is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.secretScanningPushProtectionEnabledForNewRepositories">secret_scanning_push_protection_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not secret scanning push protection is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.twitterUsername">twitter_username</a></code> | <code>str</code> | The Twitter username for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.webCommitSignoffRequired">web_commit_signoff_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not commit signatures are required for commits to the organization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_email`<sup>Required</sup> <a name="billing_email" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.billingEmail"></a>

- *Type:* str

The billing email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#billing_email OrganizationSettings#billing_email}

---

##### `advanced_security_enabled_for_new_repositories`<sup>Optional</sup> <a name="advanced_security_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.advancedSecurityEnabledForNewRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not advanced security is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#advanced_security_enabled_for_new_repositories OrganizationSettings#advanced_security_enabled_for_new_repositories}

---

##### `blog`<sup>Optional</sup> <a name="blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.blog"></a>

- *Type:* str

The blog URL for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#blog OrganizationSettings#blog}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.company"></a>

- *Type:* str

The company name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#company OrganizationSettings#company}

---

##### `default_repository_permission`<sup>Optional</sup> <a name="default_repository_permission" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.defaultRepositoryPermission"></a>

- *Type:* str

The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#default_repository_permission OrganizationSettings#default_repository_permission}

---

##### `dependabot_alerts_enabled_for_new_repositories`<sup>Optional</sup> <a name="dependabot_alerts_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependabotAlertsEnabledForNewRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not dependabot alerts are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#dependabot_alerts_enabled_for_new_repositories OrganizationSettings#dependabot_alerts_enabled_for_new_repositories}

---

##### `dependabot_security_updates_enabled_for_new_repositories`<sup>Optional</sup> <a name="dependabot_security_updates_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not dependabot security updates are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#dependabot_security_updates_enabled_for_new_repositories OrganizationSettings#dependabot_security_updates_enabled_for_new_repositories}

---

##### `dependency_graph_enabled_for_new_repositories`<sup>Optional</sup> <a name="dependency_graph_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependencyGraphEnabledForNewRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not dependency graph is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#dependency_graph_enabled_for_new_repositories OrganizationSettings#dependency_graph_enabled_for_new_repositories}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.description"></a>

- *Type:* str

The description for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#description OrganizationSettings#description}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.email"></a>

- *Type:* str

The email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#email OrganizationSettings#email}

---

##### `has_organization_projects`<sup>Optional</sup> <a name="has_organization_projects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.hasOrganizationProjects"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#has_organization_projects OrganizationSettings#has_organization_projects}

---

##### `has_repository_projects`<sup>Optional</sup> <a name="has_repository_projects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.hasRepositoryProjects"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not repository projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#has_repository_projects OrganizationSettings#has_repository_projects}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.location"></a>

- *Type:* str

The location for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#location OrganizationSettings#location}

---

##### `members_can_create_internal_repositories`<sup>Optional</sup> <a name="members_can_create_internal_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreateInternalRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new internal repositories. For Enterprise Organizations only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_internal_repositories OrganizationSettings#members_can_create_internal_repositories}

---

##### `members_can_create_pages`<sup>Optional</sup> <a name="members_can_create_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePages"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_pages OrganizationSettings#members_can_create_pages}

---

##### `members_can_create_private_pages`<sup>Optional</sup> <a name="members_can_create_private_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePrivatePages"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new private pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_private_pages OrganizationSettings#members_can_create_private_pages}

---

##### `members_can_create_private_repositories`<sup>Optional</sup> <a name="members_can_create_private_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePrivateRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_private_repositories OrganizationSettings#members_can_create_private_repositories}

---

##### `members_can_create_public_pages`<sup>Optional</sup> <a name="members_can_create_public_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePublicPages"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new public pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_public_pages OrganizationSettings#members_can_create_public_pages}

---

##### `members_can_create_public_repositories`<sup>Optional</sup> <a name="members_can_create_public_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePublicRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new public repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_public_repositories OrganizationSettings#members_can_create_public_repositories}

---

##### `members_can_create_repositories`<sup>Optional</sup> <a name="members_can_create_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreateRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_repositories OrganizationSettings#members_can_create_repositories}

---

##### `members_can_fork_private_repositories`<sup>Optional</sup> <a name="members_can_fork_private_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanForkPrivateRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can fork private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_fork_private_repositories OrganizationSettings#members_can_fork_private_repositories}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.name"></a>

- *Type:* str

The name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `secret_scanning_enabled_for_new_repositories`<sup>Optional</sup> <a name="secret_scanning_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.secretScanningEnabledForNewRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not secret scanning is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#secret_scanning_enabled_for_new_repositories OrganizationSettings#secret_scanning_enabled_for_new_repositories}

---

##### `secret_scanning_push_protection_enabled_for_new_repositories`<sup>Optional</sup> <a name="secret_scanning_push_protection_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.secretScanningPushProtectionEnabledForNewRepositories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not secret scanning push protection is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#secret_scanning_push_protection_enabled_for_new_repositories OrganizationSettings#secret_scanning_push_protection_enabled_for_new_repositories}

---

##### `twitter_username`<sup>Optional</sup> <a name="twitter_username" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.twitterUsername"></a>

- *Type:* str

The Twitter username for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#twitter_username OrganizationSettings#twitter_username}

---

##### `web_commit_signoff_required`<sup>Optional</sup> <a name="web_commit_signoff_required" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.webCommitSignoffRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not commit signatures are required for commits to the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#web_commit_signoff_required OrganizationSettings#web_commit_signoff_required}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetAdvancedSecurityEnabledForNewRepositories">reset_advanced_security_enabled_for_new_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetBlog">reset_blog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetCompany">reset_company</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDefaultRepositoryPermission">reset_default_repository_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotAlertsEnabledForNewRepositories">reset_dependabot_alerts_enabled_for_new_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotSecurityUpdatesEnabledForNewRepositories">reset_dependabot_security_updates_enabled_for_new_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependencyGraphEnabledForNewRepositories">reset_dependency_graph_enabled_for_new_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasOrganizationProjects">reset_has_organization_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasRepositoryProjects">reset_has_repository_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateInternalRepositories">reset_members_can_create_internal_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePages">reset_members_can_create_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivatePages">reset_members_can_create_private_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivateRepositories">reset_members_can_create_private_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicPages">reset_members_can_create_public_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicRepositories">reset_members_can_create_public_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateRepositories">reset_members_can_create_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanForkPrivateRepositories">reset_members_can_fork_private_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningEnabledForNewRepositories">reset_secret_scanning_enabled_for_new_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningPushProtectionEnabledForNewRepositories">reset_secret_scanning_push_protection_enabled_for_new_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetTwitterUsername">reset_twitter_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetWebCommitSignoffRequired">reset_web_commit_signoff_required</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_advanced_security_enabled_for_new_repositories` <a name="reset_advanced_security_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetAdvancedSecurityEnabledForNewRepositories"></a>

```python
def reset_advanced_security_enabled_for_new_repositories() -> None
```

##### `reset_blog` <a name="reset_blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetBlog"></a>

```python
def reset_blog() -> None
```

##### `reset_company` <a name="reset_company" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetCompany"></a>

```python
def reset_company() -> None
```

##### `reset_default_repository_permission` <a name="reset_default_repository_permission" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDefaultRepositoryPermission"></a>

```python
def reset_default_repository_permission() -> None
```

##### `reset_dependabot_alerts_enabled_for_new_repositories` <a name="reset_dependabot_alerts_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotAlertsEnabledForNewRepositories"></a>

```python
def reset_dependabot_alerts_enabled_for_new_repositories() -> None
```

##### `reset_dependabot_security_updates_enabled_for_new_repositories` <a name="reset_dependabot_security_updates_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotSecurityUpdatesEnabledForNewRepositories"></a>

```python
def reset_dependabot_security_updates_enabled_for_new_repositories() -> None
```

##### `reset_dependency_graph_enabled_for_new_repositories` <a name="reset_dependency_graph_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependencyGraphEnabledForNewRepositories"></a>

```python
def reset_dependency_graph_enabled_for_new_repositories() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_has_organization_projects` <a name="reset_has_organization_projects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasOrganizationProjects"></a>

```python
def reset_has_organization_projects() -> None
```

##### `reset_has_repository_projects` <a name="reset_has_repository_projects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasRepositoryProjects"></a>

```python
def reset_has_repository_projects() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_members_can_create_internal_repositories` <a name="reset_members_can_create_internal_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateInternalRepositories"></a>

```python
def reset_members_can_create_internal_repositories() -> None
```

##### `reset_members_can_create_pages` <a name="reset_members_can_create_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePages"></a>

```python
def reset_members_can_create_pages() -> None
```

##### `reset_members_can_create_private_pages` <a name="reset_members_can_create_private_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivatePages"></a>

```python
def reset_members_can_create_private_pages() -> None
```

##### `reset_members_can_create_private_repositories` <a name="reset_members_can_create_private_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivateRepositories"></a>

```python
def reset_members_can_create_private_repositories() -> None
```

##### `reset_members_can_create_public_pages` <a name="reset_members_can_create_public_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicPages"></a>

```python
def reset_members_can_create_public_pages() -> None
```

##### `reset_members_can_create_public_repositories` <a name="reset_members_can_create_public_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicRepositories"></a>

```python
def reset_members_can_create_public_repositories() -> None
```

##### `reset_members_can_create_repositories` <a name="reset_members_can_create_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateRepositories"></a>

```python
def reset_members_can_create_repositories() -> None
```

##### `reset_members_can_fork_private_repositories` <a name="reset_members_can_fork_private_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanForkPrivateRepositories"></a>

```python
def reset_members_can_fork_private_repositories() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_secret_scanning_enabled_for_new_repositories` <a name="reset_secret_scanning_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningEnabledForNewRepositories"></a>

```python
def reset_secret_scanning_enabled_for_new_repositories() -> None
```

##### `reset_secret_scanning_push_protection_enabled_for_new_repositories` <a name="reset_secret_scanning_push_protection_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningPushProtectionEnabledForNewRepositories"></a>

```python
def reset_secret_scanning_push_protection_enabled_for_new_repositories() -> None
```

##### `reset_twitter_username` <a name="reset_twitter_username" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetTwitterUsername"></a>

```python
def reset_twitter_username() -> None
```

##### `reset_web_commit_signoff_required` <a name="reset_web_commit_signoff_required" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetWebCommitSignoffRequired"></a>

```python
def reset_web_commit_signoff_required() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import organization_settings

organizationSettings.OrganizationSettings.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import organization_settings

organizationSettings.OrganizationSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import organization_settings

organizationSettings.OrganizationSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import organization_settings

organizationSettings.OrganizationSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositoriesInput">advanced_security_enabled_for_new_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmailInput">billing_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blogInput">blog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.companyInput">company_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermissionInput">default_repository_permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositoriesInput">dependabot_alerts_enabled_for_new_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositoriesInput">dependabot_security_updates_enabled_for_new_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositoriesInput">dependency_graph_enabled_for_new_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjectsInput">has_organization_projects_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjectsInput">has_repository_projects_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositoriesInput">members_can_create_internal_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePagesInput">members_can_create_pages_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePagesInput">members_can_create_private_pages_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositoriesInput">members_can_create_private_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPagesInput">members_can_create_public_pages_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositoriesInput">members_can_create_public_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositoriesInput">members_can_create_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositoriesInput">members_can_fork_private_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositoriesInput">secret_scanning_enabled_for_new_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput">secret_scanning_push_protection_enabled_for_new_repositories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsernameInput">twitter_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequiredInput">web_commit_signoff_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositories">advanced_security_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmail">billing_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blog">blog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.company">company</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermission">default_repository_permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositories">dependabot_alerts_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositories">dependabot_security_updates_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositories">dependency_graph_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjects">has_organization_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjects">has_repository_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositories">members_can_create_internal_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePages">members_can_create_pages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePages">members_can_create_private_pages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositories">members_can_create_private_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPages">members_can_create_public_pages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositories">members_can_create_public_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositories">members_can_create_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositories">members_can_fork_private_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositories">secret_scanning_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositories">secret_scanning_push_protection_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsername">twitter_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequired">web_commit_signoff_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_security_enabled_for_new_repositories_input`<sup>Optional</sup> <a name="advanced_security_enabled_for_new_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositoriesInput"></a>

```python
advanced_security_enabled_for_new_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `billing_email_input`<sup>Optional</sup> <a name="billing_email_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmailInput"></a>

```python
billing_email_input: str
```

- *Type:* str

---

##### `blog_input`<sup>Optional</sup> <a name="blog_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blogInput"></a>

```python
blog_input: str
```

- *Type:* str

---

##### `company_input`<sup>Optional</sup> <a name="company_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.companyInput"></a>

```python
company_input: str
```

- *Type:* str

---

##### `default_repository_permission_input`<sup>Optional</sup> <a name="default_repository_permission_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermissionInput"></a>

```python
default_repository_permission_input: str
```

- *Type:* str

---

##### `dependabot_alerts_enabled_for_new_repositories_input`<sup>Optional</sup> <a name="dependabot_alerts_enabled_for_new_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositoriesInput"></a>

```python
dependabot_alerts_enabled_for_new_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dependabot_security_updates_enabled_for_new_repositories_input`<sup>Optional</sup> <a name="dependabot_security_updates_enabled_for_new_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositoriesInput"></a>

```python
dependabot_security_updates_enabled_for_new_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dependency_graph_enabled_for_new_repositories_input`<sup>Optional</sup> <a name="dependency_graph_enabled_for_new_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositoriesInput"></a>

```python
dependency_graph_enabled_for_new_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `has_organization_projects_input`<sup>Optional</sup> <a name="has_organization_projects_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjectsInput"></a>

```python
has_organization_projects_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_repository_projects_input`<sup>Optional</sup> <a name="has_repository_projects_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjectsInput"></a>

```python
has_repository_projects_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `members_can_create_internal_repositories_input`<sup>Optional</sup> <a name="members_can_create_internal_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositoriesInput"></a>

```python
members_can_create_internal_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_pages_input`<sup>Optional</sup> <a name="members_can_create_pages_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePagesInput"></a>

```python
members_can_create_pages_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_private_pages_input`<sup>Optional</sup> <a name="members_can_create_private_pages_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePagesInput"></a>

```python
members_can_create_private_pages_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_private_repositories_input`<sup>Optional</sup> <a name="members_can_create_private_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositoriesInput"></a>

```python
members_can_create_private_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_public_pages_input`<sup>Optional</sup> <a name="members_can_create_public_pages_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPagesInput"></a>

```python
members_can_create_public_pages_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_public_repositories_input`<sup>Optional</sup> <a name="members_can_create_public_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositoriesInput"></a>

```python
members_can_create_public_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_repositories_input`<sup>Optional</sup> <a name="members_can_create_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositoriesInput"></a>

```python
members_can_create_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_fork_private_repositories_input`<sup>Optional</sup> <a name="members_can_fork_private_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositoriesInput"></a>

```python
members_can_fork_private_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_scanning_enabled_for_new_repositories_input`<sup>Optional</sup> <a name="secret_scanning_enabled_for_new_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositoriesInput"></a>

```python
secret_scanning_enabled_for_new_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_scanning_push_protection_enabled_for_new_repositories_input`<sup>Optional</sup> <a name="secret_scanning_push_protection_enabled_for_new_repositories_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput"></a>

```python
secret_scanning_push_protection_enabled_for_new_repositories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `twitter_username_input`<sup>Optional</sup> <a name="twitter_username_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsernameInput"></a>

```python
twitter_username_input: str
```

- *Type:* str

---

##### `web_commit_signoff_required_input`<sup>Optional</sup> <a name="web_commit_signoff_required_input" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequiredInput"></a>

```python
web_commit_signoff_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `advanced_security_enabled_for_new_repositories`<sup>Required</sup> <a name="advanced_security_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositories"></a>

```python
advanced_security_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `billing_email`<sup>Required</sup> <a name="billing_email" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmail"></a>

```python
billing_email: str
```

- *Type:* str

---

##### `blog`<sup>Required</sup> <a name="blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blog"></a>

```python
blog: str
```

- *Type:* str

---

##### `company`<sup>Required</sup> <a name="company" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.company"></a>

```python
company: str
```

- *Type:* str

---

##### `default_repository_permission`<sup>Required</sup> <a name="default_repository_permission" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermission"></a>

```python
default_repository_permission: str
```

- *Type:* str

---

##### `dependabot_alerts_enabled_for_new_repositories`<sup>Required</sup> <a name="dependabot_alerts_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositories"></a>

```python
dependabot_alerts_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dependabot_security_updates_enabled_for_new_repositories`<sup>Required</sup> <a name="dependabot_security_updates_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```python
dependabot_security_updates_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dependency_graph_enabled_for_new_repositories`<sup>Required</sup> <a name="dependency_graph_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositories"></a>

```python
dependency_graph_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `has_organization_projects`<sup>Required</sup> <a name="has_organization_projects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjects"></a>

```python
has_organization_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `has_repository_projects`<sup>Required</sup> <a name="has_repository_projects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjects"></a>

```python
has_repository_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `members_can_create_internal_repositories`<sup>Required</sup> <a name="members_can_create_internal_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositories"></a>

```python
members_can_create_internal_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_pages`<sup>Required</sup> <a name="members_can_create_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePages"></a>

```python
members_can_create_pages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_private_pages`<sup>Required</sup> <a name="members_can_create_private_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePages"></a>

```python
members_can_create_private_pages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_private_repositories`<sup>Required</sup> <a name="members_can_create_private_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositories"></a>

```python
members_can_create_private_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_public_pages`<sup>Required</sup> <a name="members_can_create_public_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPages"></a>

```python
members_can_create_public_pages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_public_repositories`<sup>Required</sup> <a name="members_can_create_public_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositories"></a>

```python
members_can_create_public_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_create_repositories`<sup>Required</sup> <a name="members_can_create_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositories"></a>

```python
members_can_create_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `members_can_fork_private_repositories`<sup>Required</sup> <a name="members_can_fork_private_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositories"></a>

```python
members_can_fork_private_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_scanning_enabled_for_new_repositories`<sup>Required</sup> <a name="secret_scanning_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositories"></a>

```python
secret_scanning_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_scanning_push_protection_enabled_for_new_repositories`<sup>Required</sup> <a name="secret_scanning_push_protection_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```python
secret_scanning_push_protection_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `twitter_username`<sup>Required</sup> <a name="twitter_username" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsername"></a>

```python
twitter_username: str
```

- *Type:* str

---

##### `web_commit_signoff_required`<sup>Required</sup> <a name="web_commit_signoff_required" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequired"></a>

```python
web_commit_signoff_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationSettingsConfig <a name="OrganizationSettingsConfig" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_settings

organizationSettings.OrganizationSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_email: str,
  advanced_security_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  blog: str = None,
  company: str = None,
  default_repository_permission: str = None,
  dependabot_alerts_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  dependabot_security_updates_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  dependency_graph_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  description: str = None,
  email: str = None,
  has_organization_projects: typing.Union[bool, IResolvable] = None,
  has_repository_projects: typing.Union[bool, IResolvable] = None,
  id: str = None,
  location: str = None,
  members_can_create_internal_repositories: typing.Union[bool, IResolvable] = None,
  members_can_create_pages: typing.Union[bool, IResolvable] = None,
  members_can_create_private_pages: typing.Union[bool, IResolvable] = None,
  members_can_create_private_repositories: typing.Union[bool, IResolvable] = None,
  members_can_create_public_pages: typing.Union[bool, IResolvable] = None,
  members_can_create_public_repositories: typing.Union[bool, IResolvable] = None,
  members_can_create_repositories: typing.Union[bool, IResolvable] = None,
  members_can_fork_private_repositories: typing.Union[bool, IResolvable] = None,
  name: str = None,
  secret_scanning_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  secret_scanning_push_protection_enabled_for_new_repositories: typing.Union[bool, IResolvable] = None,
  twitter_username: str = None,
  web_commit_signoff_required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.billingEmail">billing_email</a></code> | <code>str</code> | The billing email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.advancedSecurityEnabledForNewRepositories">advanced_security_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not advanced security is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.blog">blog</a></code> | <code>str</code> | The blog URL for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.company">company</a></code> | <code>str</code> | The company name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.defaultRepositoryPermission">default_repository_permission</a></code> | <code>str</code> | The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotAlertsEnabledForNewRepositories">dependabot_alerts_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not dependabot alerts are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotSecurityUpdatesEnabledForNewRepositories">dependabot_security_updates_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not dependabot security updates are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependencyGraphEnabledForNewRepositories">dependency_graph_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not dependency graph is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.description">description</a></code> | <code>str</code> | The description for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.email">email</a></code> | <code>str</code> | The email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasOrganizationProjects">has_organization_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasRepositoryProjects">has_repository_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not repository projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.location">location</a></code> | <code>str</code> | The location for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateInternalRepositories">members_can_create_internal_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new internal repositories. For Enterprise Organizations only. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePages">members_can_create_pages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivatePages">members_can_create_private_pages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new private pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivateRepositories">members_can_create_private_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicPages">members_can_create_public_pages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new public pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicRepositories">members_can_create_public_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new public repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateRepositories">members_can_create_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can create new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanForkPrivateRepositories">members_can_fork_private_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not organization members can fork private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.name">name</a></code> | <code>str</code> | The name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningEnabledForNewRepositories">secret_scanning_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not secret scanning is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories">secret_scanning_push_protection_enabled_for_new_repositories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not secret scanning push protection is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.twitterUsername">twitter_username</a></code> | <code>str</code> | The Twitter username for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.webCommitSignoffRequired">web_commit_signoff_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not commit signatures are required for commits to the organization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_email`<sup>Required</sup> <a name="billing_email" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.billingEmail"></a>

```python
billing_email: str
```

- *Type:* str

The billing email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#billing_email OrganizationSettings#billing_email}

---

##### `advanced_security_enabled_for_new_repositories`<sup>Optional</sup> <a name="advanced_security_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.advancedSecurityEnabledForNewRepositories"></a>

```python
advanced_security_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not advanced security is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#advanced_security_enabled_for_new_repositories OrganizationSettings#advanced_security_enabled_for_new_repositories}

---

##### `blog`<sup>Optional</sup> <a name="blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.blog"></a>

```python
blog: str
```

- *Type:* str

The blog URL for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#blog OrganizationSettings#blog}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.company"></a>

```python
company: str
```

- *Type:* str

The company name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#company OrganizationSettings#company}

---

##### `default_repository_permission`<sup>Optional</sup> <a name="default_repository_permission" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.defaultRepositoryPermission"></a>

```python
default_repository_permission: str
```

- *Type:* str

The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#default_repository_permission OrganizationSettings#default_repository_permission}

---

##### `dependabot_alerts_enabled_for_new_repositories`<sup>Optional</sup> <a name="dependabot_alerts_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotAlertsEnabledForNewRepositories"></a>

```python
dependabot_alerts_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not dependabot alerts are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#dependabot_alerts_enabled_for_new_repositories OrganizationSettings#dependabot_alerts_enabled_for_new_repositories}

---

##### `dependabot_security_updates_enabled_for_new_repositories`<sup>Optional</sup> <a name="dependabot_security_updates_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```python
dependabot_security_updates_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not dependabot security updates are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#dependabot_security_updates_enabled_for_new_repositories OrganizationSettings#dependabot_security_updates_enabled_for_new_repositories}

---

##### `dependency_graph_enabled_for_new_repositories`<sup>Optional</sup> <a name="dependency_graph_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependencyGraphEnabledForNewRepositories"></a>

```python
dependency_graph_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not dependency graph is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#dependency_graph_enabled_for_new_repositories OrganizationSettings#dependency_graph_enabled_for_new_repositories}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#description OrganizationSettings#description}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#email OrganizationSettings#email}

---

##### `has_organization_projects`<sup>Optional</sup> <a name="has_organization_projects" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasOrganizationProjects"></a>

```python
has_organization_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#has_organization_projects OrganizationSettings#has_organization_projects}

---

##### `has_repository_projects`<sup>Optional</sup> <a name="has_repository_projects" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasRepositoryProjects"></a>

```python
has_repository_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not repository projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#has_repository_projects OrganizationSettings#has_repository_projects}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#location OrganizationSettings#location}

---

##### `members_can_create_internal_repositories`<sup>Optional</sup> <a name="members_can_create_internal_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateInternalRepositories"></a>

```python
members_can_create_internal_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new internal repositories. For Enterprise Organizations only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_internal_repositories OrganizationSettings#members_can_create_internal_repositories}

---

##### `members_can_create_pages`<sup>Optional</sup> <a name="members_can_create_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePages"></a>

```python
members_can_create_pages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_pages OrganizationSettings#members_can_create_pages}

---

##### `members_can_create_private_pages`<sup>Optional</sup> <a name="members_can_create_private_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivatePages"></a>

```python
members_can_create_private_pages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new private pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_private_pages OrganizationSettings#members_can_create_private_pages}

---

##### `members_can_create_private_repositories`<sup>Optional</sup> <a name="members_can_create_private_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivateRepositories"></a>

```python
members_can_create_private_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_private_repositories OrganizationSettings#members_can_create_private_repositories}

---

##### `members_can_create_public_pages`<sup>Optional</sup> <a name="members_can_create_public_pages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicPages"></a>

```python
members_can_create_public_pages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new public pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_public_pages OrganizationSettings#members_can_create_public_pages}

---

##### `members_can_create_public_repositories`<sup>Optional</sup> <a name="members_can_create_public_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicRepositories"></a>

```python
members_can_create_public_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new public repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_public_repositories OrganizationSettings#members_can_create_public_repositories}

---

##### `members_can_create_repositories`<sup>Optional</sup> <a name="members_can_create_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateRepositories"></a>

```python
members_can_create_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can create new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_create_repositories OrganizationSettings#members_can_create_repositories}

---

##### `members_can_fork_private_repositories`<sup>Optional</sup> <a name="members_can_fork_private_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanForkPrivateRepositories"></a>

```python
members_can_fork_private_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not organization members can fork private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#members_can_fork_private_repositories OrganizationSettings#members_can_fork_private_repositories}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `secret_scanning_enabled_for_new_repositories`<sup>Optional</sup> <a name="secret_scanning_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningEnabledForNewRepositories"></a>

```python
secret_scanning_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not secret scanning is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#secret_scanning_enabled_for_new_repositories OrganizationSettings#secret_scanning_enabled_for_new_repositories}

---

##### `secret_scanning_push_protection_enabled_for_new_repositories`<sup>Optional</sup> <a name="secret_scanning_push_protection_enabled_for_new_repositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```python
secret_scanning_push_protection_enabled_for_new_repositories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not secret scanning push protection is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#secret_scanning_push_protection_enabled_for_new_repositories OrganizationSettings#secret_scanning_push_protection_enabled_for_new_repositories}

---

##### `twitter_username`<sup>Optional</sup> <a name="twitter_username" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.twitterUsername"></a>

```python
twitter_username: str
```

- *Type:* str

The Twitter username for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#twitter_username OrganizationSettings#twitter_username}

---

##### `web_commit_signoff_required`<sup>Optional</sup> <a name="web_commit_signoff_required" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.webCommitSignoffRequired"></a>

```python
web_commit_signoff_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not commit signatures are required for commits to the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/resources/organization_settings#web_commit_signoff_required OrganizationSettings#web_commit_signoff_required}

---



