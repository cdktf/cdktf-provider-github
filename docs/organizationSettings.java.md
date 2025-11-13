# `organizationSettings` Submodule <a name="`organizationSettings` Submodule" id="@cdktf/provider-github.organizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationSettings <a name="OrganizationSettings" id="@cdktf/provider-github.organizationSettings.OrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings github_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_settings.OrganizationSettings;

OrganizationSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .billingEmail(java.lang.String)
//  .advancedSecurityEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .blog(java.lang.String)
//  .company(java.lang.String)
//  .defaultRepositoryPermission(java.lang.String)
//  .dependabotAlertsEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .dependabotSecurityUpdatesEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .dependencyGraphEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .email(java.lang.String)
//  .hasOrganizationProjects(java.lang.Boolean|IResolvable)
//  .hasRepositoryProjects(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .membersCanCreateInternalRepositories(java.lang.Boolean|IResolvable)
//  .membersCanCreatePages(java.lang.Boolean|IResolvable)
//  .membersCanCreatePrivatePages(java.lang.Boolean|IResolvable)
//  .membersCanCreatePrivateRepositories(java.lang.Boolean|IResolvable)
//  .membersCanCreatePublicPages(java.lang.Boolean|IResolvable)
//  .membersCanCreatePublicRepositories(java.lang.Boolean|IResolvable)
//  .membersCanCreateRepositories(java.lang.Boolean|IResolvable)
//  .membersCanForkPrivateRepositories(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .secretScanningEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .secretScanningPushProtectionEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .twitterUsername(java.lang.String)
//  .webCommitSignoffRequired(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.billingEmail">billingEmail</a></code> | <code>java.lang.String</code> | The billing email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.advancedSecurityEnabledForNewRepositories">advancedSecurityEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not advanced security is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.blog">blog</a></code> | <code>java.lang.String</code> | The blog URL for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.company">company</a></code> | <code>java.lang.String</code> | The company name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.defaultRepositoryPermission">defaultRepositoryPermission</a></code> | <code>java.lang.String</code> | The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependabotAlertsEnabledForNewRepositories">dependabotAlertsEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not dependabot alerts are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependabotSecurityUpdatesEnabledForNewRepositories">dependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not dependabot security updates are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependencyGraphEnabledForNewRepositories">dependencyGraphEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not dependency graph is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | The email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.hasOrganizationProjects">hasOrganizationProjects</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.hasRepositoryProjects">hasRepositoryProjects</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not repository projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreateInternalRepositories">membersCanCreateInternalRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new internal repositories. For Enterprise Organizations only. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePages">membersCanCreatePages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePrivatePages">membersCanCreatePrivatePages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new private pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePrivateRepositories">membersCanCreatePrivateRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePublicPages">membersCanCreatePublicPages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new public pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePublicRepositories">membersCanCreatePublicRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new public repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreateRepositories">membersCanCreateRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanForkPrivateRepositories">membersCanForkPrivateRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can fork private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.secretScanningEnabledForNewRepositories">secretScanningEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not secret scanning is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.secretScanningPushProtectionEnabledForNewRepositories">secretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not secret scanning push protection is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.twitterUsername">twitterUsername</a></code> | <code>java.lang.String</code> | The Twitter username for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.webCommitSignoffRequired">webCommitSignoffRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not commit signatures are required for commits to the organization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingEmail`<sup>Required</sup> <a name="billingEmail" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.billingEmail"></a>

- *Type:* java.lang.String

The billing email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#billing_email OrganizationSettings#billing_email}

---

##### `advancedSecurityEnabledForNewRepositories`<sup>Optional</sup> <a name="advancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.advancedSecurityEnabledForNewRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not advanced security is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#advanced_security_enabled_for_new_repositories OrganizationSettings#advanced_security_enabled_for_new_repositories}

---

##### `blog`<sup>Optional</sup> <a name="blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.blog"></a>

- *Type:* java.lang.String

The blog URL for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#blog OrganizationSettings#blog}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.company"></a>

- *Type:* java.lang.String

The company name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#company OrganizationSettings#company}

---

##### `defaultRepositoryPermission`<sup>Optional</sup> <a name="defaultRepositoryPermission" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.defaultRepositoryPermission"></a>

- *Type:* java.lang.String

The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#default_repository_permission OrganizationSettings#default_repository_permission}

---

##### `dependabotAlertsEnabledForNewRepositories`<sup>Optional</sup> <a name="dependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependabotAlertsEnabledForNewRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not dependabot alerts are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#dependabot_alerts_enabled_for_new_repositories OrganizationSettings#dependabot_alerts_enabled_for_new_repositories}

---

##### `dependabotSecurityUpdatesEnabledForNewRepositories`<sup>Optional</sup> <a name="dependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not dependabot security updates are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#dependabot_security_updates_enabled_for_new_repositories OrganizationSettings#dependabot_security_updates_enabled_for_new_repositories}

---

##### `dependencyGraphEnabledForNewRepositories`<sup>Optional</sup> <a name="dependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.dependencyGraphEnabledForNewRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not dependency graph is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#dependency_graph_enabled_for_new_repositories OrganizationSettings#dependency_graph_enabled_for_new_repositories}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#description OrganizationSettings#description}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.email"></a>

- *Type:* java.lang.String

The email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#email OrganizationSettings#email}

---

##### `hasOrganizationProjects`<sup>Optional</sup> <a name="hasOrganizationProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.hasOrganizationProjects"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#has_organization_projects OrganizationSettings#has_organization_projects}

---

##### `hasRepositoryProjects`<sup>Optional</sup> <a name="hasRepositoryProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.hasRepositoryProjects"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not repository projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#has_repository_projects OrganizationSettings#has_repository_projects}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#location OrganizationSettings#location}

---

##### `membersCanCreateInternalRepositories`<sup>Optional</sup> <a name="membersCanCreateInternalRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreateInternalRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new internal repositories. For Enterprise Organizations only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_internal_repositories OrganizationSettings#members_can_create_internal_repositories}

---

##### `membersCanCreatePages`<sup>Optional</sup> <a name="membersCanCreatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePages"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_pages OrganizationSettings#members_can_create_pages}

---

##### `membersCanCreatePrivatePages`<sup>Optional</sup> <a name="membersCanCreatePrivatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePrivatePages"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new private pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_private_pages OrganizationSettings#members_can_create_private_pages}

---

##### `membersCanCreatePrivateRepositories`<sup>Optional</sup> <a name="membersCanCreatePrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePrivateRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_private_repositories OrganizationSettings#members_can_create_private_repositories}

---

##### `membersCanCreatePublicPages`<sup>Optional</sup> <a name="membersCanCreatePublicPages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePublicPages"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new public pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_public_pages OrganizationSettings#members_can_create_public_pages}

---

##### `membersCanCreatePublicRepositories`<sup>Optional</sup> <a name="membersCanCreatePublicRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreatePublicRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new public repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_public_repositories OrganizationSettings#members_can_create_public_repositories}

---

##### `membersCanCreateRepositories`<sup>Optional</sup> <a name="membersCanCreateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanCreateRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_repositories OrganizationSettings#members_can_create_repositories}

---

##### `membersCanForkPrivateRepositories`<sup>Optional</sup> <a name="membersCanForkPrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.membersCanForkPrivateRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can fork private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_fork_private_repositories OrganizationSettings#members_can_fork_private_repositories}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `secretScanningEnabledForNewRepositories`<sup>Optional</sup> <a name="secretScanningEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.secretScanningEnabledForNewRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not secret scanning is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#secret_scanning_enabled_for_new_repositories OrganizationSettings#secret_scanning_enabled_for_new_repositories}

---

##### `secretScanningPushProtectionEnabledForNewRepositories`<sup>Optional</sup> <a name="secretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.secretScanningPushProtectionEnabledForNewRepositories"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not secret scanning push protection is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#secret_scanning_push_protection_enabled_for_new_repositories OrganizationSettings#secret_scanning_push_protection_enabled_for_new_repositories}

---

##### `twitterUsername`<sup>Optional</sup> <a name="twitterUsername" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.twitterUsername"></a>

- *Type:* java.lang.String

The Twitter username for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#twitter_username OrganizationSettings#twitter_username}

---

##### `webCommitSignoffRequired`<sup>Optional</sup> <a name="webCommitSignoffRequired" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.webCommitSignoffRequired"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not commit signatures are required for commits to the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#web_commit_signoff_required OrganizationSettings#web_commit_signoff_required}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetAdvancedSecurityEnabledForNewRepositories">resetAdvancedSecurityEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetBlog">resetBlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetCompany">resetCompany</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDefaultRepositoryPermission">resetDefaultRepositoryPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotAlertsEnabledForNewRepositories">resetDependabotAlertsEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotSecurityUpdatesEnabledForNewRepositories">resetDependabotSecurityUpdatesEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependencyGraphEnabledForNewRepositories">resetDependencyGraphEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasOrganizationProjects">resetHasOrganizationProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasRepositoryProjects">resetHasRepositoryProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateInternalRepositories">resetMembersCanCreateInternalRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePages">resetMembersCanCreatePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivatePages">resetMembersCanCreatePrivatePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivateRepositories">resetMembersCanCreatePrivateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicPages">resetMembersCanCreatePublicPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicRepositories">resetMembersCanCreatePublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateRepositories">resetMembersCanCreateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanForkPrivateRepositories">resetMembersCanForkPrivateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningEnabledForNewRepositories">resetSecretScanningEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningPushProtectionEnabledForNewRepositories">resetSecretScanningPushProtectionEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetTwitterUsername">resetTwitterUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetWebCommitSignoffRequired">resetWebCommitSignoffRequired</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdvancedSecurityEnabledForNewRepositories` <a name="resetAdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetAdvancedSecurityEnabledForNewRepositories"></a>

```java
public void resetAdvancedSecurityEnabledForNewRepositories()
```

##### `resetBlog` <a name="resetBlog" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetBlog"></a>

```java
public void resetBlog()
```

##### `resetCompany` <a name="resetCompany" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetCompany"></a>

```java
public void resetCompany()
```

##### `resetDefaultRepositoryPermission` <a name="resetDefaultRepositoryPermission" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDefaultRepositoryPermission"></a>

```java
public void resetDefaultRepositoryPermission()
```

##### `resetDependabotAlertsEnabledForNewRepositories` <a name="resetDependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotAlertsEnabledForNewRepositories"></a>

```java
public void resetDependabotAlertsEnabledForNewRepositories()
```

##### `resetDependabotSecurityUpdatesEnabledForNewRepositories` <a name="resetDependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotSecurityUpdatesEnabledForNewRepositories"></a>

```java
public void resetDependabotSecurityUpdatesEnabledForNewRepositories()
```

##### `resetDependencyGraphEnabledForNewRepositories` <a name="resetDependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependencyGraphEnabledForNewRepositories"></a>

```java
public void resetDependencyGraphEnabledForNewRepositories()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetHasOrganizationProjects` <a name="resetHasOrganizationProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasOrganizationProjects"></a>

```java
public void resetHasOrganizationProjects()
```

##### `resetHasRepositoryProjects` <a name="resetHasRepositoryProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasRepositoryProjects"></a>

```java
public void resetHasRepositoryProjects()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMembersCanCreateInternalRepositories` <a name="resetMembersCanCreateInternalRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateInternalRepositories"></a>

```java
public void resetMembersCanCreateInternalRepositories()
```

##### `resetMembersCanCreatePages` <a name="resetMembersCanCreatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePages"></a>

```java
public void resetMembersCanCreatePages()
```

##### `resetMembersCanCreatePrivatePages` <a name="resetMembersCanCreatePrivatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivatePages"></a>

```java
public void resetMembersCanCreatePrivatePages()
```

##### `resetMembersCanCreatePrivateRepositories` <a name="resetMembersCanCreatePrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivateRepositories"></a>

```java
public void resetMembersCanCreatePrivateRepositories()
```

##### `resetMembersCanCreatePublicPages` <a name="resetMembersCanCreatePublicPages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicPages"></a>

```java
public void resetMembersCanCreatePublicPages()
```

##### `resetMembersCanCreatePublicRepositories` <a name="resetMembersCanCreatePublicRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicRepositories"></a>

```java
public void resetMembersCanCreatePublicRepositories()
```

##### `resetMembersCanCreateRepositories` <a name="resetMembersCanCreateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateRepositories"></a>

```java
public void resetMembersCanCreateRepositories()
```

##### `resetMembersCanForkPrivateRepositories` <a name="resetMembersCanForkPrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanForkPrivateRepositories"></a>

```java
public void resetMembersCanForkPrivateRepositories()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetName"></a>

```java
public void resetName()
```

##### `resetSecretScanningEnabledForNewRepositories` <a name="resetSecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningEnabledForNewRepositories"></a>

```java
public void resetSecretScanningEnabledForNewRepositories()
```

##### `resetSecretScanningPushProtectionEnabledForNewRepositories` <a name="resetSecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningPushProtectionEnabledForNewRepositories"></a>

```java
public void resetSecretScanningPushProtectionEnabledForNewRepositories()
```

##### `resetTwitterUsername` <a name="resetTwitterUsername" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetTwitterUsername"></a>

```java
public void resetTwitterUsername()
```

##### `resetWebCommitSignoffRequired` <a name="resetWebCommitSignoffRequired" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetWebCommitSignoffRequired"></a>

```java
public void resetWebCommitSignoffRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_settings.OrganizationSettings;

OrganizationSettings.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_settings.OrganizationSettings;

OrganizationSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_settings.OrganizationSettings;

OrganizationSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_settings.OrganizationSettings;

OrganizationSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrganizationSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositoriesInput">advancedSecurityEnabledForNewRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmailInput">billingEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blogInput">blogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.companyInput">companyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermissionInput">defaultRepositoryPermissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositoriesInput">dependabotAlertsEnabledForNewRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositoriesInput">dependabotSecurityUpdatesEnabledForNewRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositoriesInput">dependencyGraphEnabledForNewRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjectsInput">hasOrganizationProjectsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjectsInput">hasRepositoryProjectsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositoriesInput">membersCanCreateInternalRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePagesInput">membersCanCreatePagesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePagesInput">membersCanCreatePrivatePagesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositoriesInput">membersCanCreatePrivateRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPagesInput">membersCanCreatePublicPagesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositoriesInput">membersCanCreatePublicRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositoriesInput">membersCanCreateRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositoriesInput">membersCanForkPrivateRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositoriesInput">secretScanningEnabledForNewRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput">secretScanningPushProtectionEnabledForNewRepositoriesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsernameInput">twitterUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequiredInput">webCommitSignoffRequiredInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositories">advancedSecurityEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmail">billingEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blog">blog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.company">company</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermission">defaultRepositoryPermission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositories">dependabotAlertsEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositories">dependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositories">dependencyGraphEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjects">hasOrganizationProjects</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjects">hasRepositoryProjects</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositories">membersCanCreateInternalRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePages">membersCanCreatePages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePages">membersCanCreatePrivatePages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositories">membersCanCreatePrivateRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPages">membersCanCreatePublicPages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositories">membersCanCreatePublicRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositories">membersCanCreateRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositories">membersCanForkPrivateRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositories">secretScanningEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositories">secretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsername">twitterUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequired">webCommitSignoffRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedSecurityEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="advancedSecurityEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getAdvancedSecurityEnabledForNewRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `billingEmailInput`<sup>Optional</sup> <a name="billingEmailInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmailInput"></a>

```java
public java.lang.String getBillingEmailInput();
```

- *Type:* java.lang.String

---

##### `blogInput`<sup>Optional</sup> <a name="blogInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blogInput"></a>

```java
public java.lang.String getBlogInput();
```

- *Type:* java.lang.String

---

##### `companyInput`<sup>Optional</sup> <a name="companyInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.companyInput"></a>

```java
public java.lang.String getCompanyInput();
```

- *Type:* java.lang.String

---

##### `defaultRepositoryPermissionInput`<sup>Optional</sup> <a name="defaultRepositoryPermissionInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermissionInput"></a>

```java
public java.lang.String getDefaultRepositoryPermissionInput();
```

- *Type:* java.lang.String

---

##### `dependabotAlertsEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="dependabotAlertsEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getDependabotAlertsEnabledForNewRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `dependabotSecurityUpdatesEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="dependabotSecurityUpdatesEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getDependabotSecurityUpdatesEnabledForNewRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `dependencyGraphEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="dependencyGraphEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getDependencyGraphEnabledForNewRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `hasOrganizationProjectsInput`<sup>Optional</sup> <a name="hasOrganizationProjectsInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjectsInput"></a>

```java
public java.lang.Boolean|IResolvable getHasOrganizationProjectsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hasRepositoryProjectsInput`<sup>Optional</sup> <a name="hasRepositoryProjectsInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjectsInput"></a>

```java
public java.lang.Boolean|IResolvable getHasRepositoryProjectsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membersCanCreateInternalRepositoriesInput`<sup>Optional</sup> <a name="membersCanCreateInternalRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreateInternalRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreatePagesInput`<sup>Optional</sup> <a name="membersCanCreatePagesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePagesInput"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePagesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreatePrivatePagesInput`<sup>Optional</sup> <a name="membersCanCreatePrivatePagesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePagesInput"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePrivatePagesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreatePrivateRepositoriesInput`<sup>Optional</sup> <a name="membersCanCreatePrivateRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePrivateRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreatePublicPagesInput`<sup>Optional</sup> <a name="membersCanCreatePublicPagesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPagesInput"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePublicPagesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreatePublicRepositoriesInput`<sup>Optional</sup> <a name="membersCanCreatePublicRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePublicRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreateRepositoriesInput`<sup>Optional</sup> <a name="membersCanCreateRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreateRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanForkPrivateRepositoriesInput`<sup>Optional</sup> <a name="membersCanForkPrivateRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanForkPrivateRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secretScanningEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="secretScanningEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getSecretScanningEnabledForNewRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `secretScanningPushProtectionEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="secretScanningPushProtectionEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput"></a>

```java
public java.lang.Boolean|IResolvable getSecretScanningPushProtectionEnabledForNewRepositoriesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `twitterUsernameInput`<sup>Optional</sup> <a name="twitterUsernameInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsernameInput"></a>

```java
public java.lang.String getTwitterUsernameInput();
```

- *Type:* java.lang.String

---

##### `webCommitSignoffRequiredInput`<sup>Optional</sup> <a name="webCommitSignoffRequiredInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getWebCommitSignoffRequiredInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `advancedSecurityEnabledForNewRepositories`<sup>Required</sup> <a name="advancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getAdvancedSecurityEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `billingEmail`<sup>Required</sup> <a name="billingEmail" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmail"></a>

```java
public java.lang.String getBillingEmail();
```

- *Type:* java.lang.String

---

##### `blog`<sup>Required</sup> <a name="blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blog"></a>

```java
public java.lang.String getBlog();
```

- *Type:* java.lang.String

---

##### `company`<sup>Required</sup> <a name="company" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.company"></a>

```java
public java.lang.String getCompany();
```

- *Type:* java.lang.String

---

##### `defaultRepositoryPermission`<sup>Required</sup> <a name="defaultRepositoryPermission" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermission"></a>

```java
public java.lang.String getDefaultRepositoryPermission();
```

- *Type:* java.lang.String

---

##### `dependabotAlertsEnabledForNewRepositories`<sup>Required</sup> <a name="dependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getDependabotAlertsEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `dependabotSecurityUpdatesEnabledForNewRepositories`<sup>Required</sup> <a name="dependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getDependabotSecurityUpdatesEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `dependencyGraphEnabledForNewRepositories`<sup>Required</sup> <a name="dependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getDependencyGraphEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `hasOrganizationProjects`<sup>Required</sup> <a name="hasOrganizationProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjects"></a>

```java
public java.lang.Boolean|IResolvable getHasOrganizationProjects();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hasRepositoryProjects`<sup>Required</sup> <a name="hasRepositoryProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjects"></a>

```java
public java.lang.Boolean|IResolvable getHasRepositoryProjects();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `membersCanCreateInternalRepositories`<sup>Required</sup> <a name="membersCanCreateInternalRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositories"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreateInternalRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreatePages`<sup>Required</sup> <a name="membersCanCreatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePages"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePages();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreatePrivatePages`<sup>Required</sup> <a name="membersCanCreatePrivatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePages"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePrivatePages();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreatePrivateRepositories`<sup>Required</sup> <a name="membersCanCreatePrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositories"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePrivateRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreatePublicPages`<sup>Required</sup> <a name="membersCanCreatePublicPages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPages"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePublicPages();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreatePublicRepositories`<sup>Required</sup> <a name="membersCanCreatePublicRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositories"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePublicRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanCreateRepositories`<sup>Required</sup> <a name="membersCanCreateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositories"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreateRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membersCanForkPrivateRepositories`<sup>Required</sup> <a name="membersCanForkPrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositories"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanForkPrivateRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secretScanningEnabledForNewRepositories`<sup>Required</sup> <a name="secretScanningEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getSecretScanningEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `secretScanningPushProtectionEnabledForNewRepositories`<sup>Required</sup> <a name="secretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getSecretScanningPushProtectionEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `twitterUsername`<sup>Required</sup> <a name="twitterUsername" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsername"></a>

```java
public java.lang.String getTwitterUsername();
```

- *Type:* java.lang.String

---

##### `webCommitSignoffRequired`<sup>Required</sup> <a name="webCommitSignoffRequired" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequired"></a>

```java
public java.lang.Boolean|IResolvable getWebCommitSignoffRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationSettingsConfig <a name="OrganizationSettingsConfig" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_settings.OrganizationSettingsConfig;

OrganizationSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .billingEmail(java.lang.String)
//  .advancedSecurityEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .blog(java.lang.String)
//  .company(java.lang.String)
//  .defaultRepositoryPermission(java.lang.String)
//  .dependabotAlertsEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .dependabotSecurityUpdatesEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .dependencyGraphEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .email(java.lang.String)
//  .hasOrganizationProjects(java.lang.Boolean|IResolvable)
//  .hasRepositoryProjects(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .membersCanCreateInternalRepositories(java.lang.Boolean|IResolvable)
//  .membersCanCreatePages(java.lang.Boolean|IResolvable)
//  .membersCanCreatePrivatePages(java.lang.Boolean|IResolvable)
//  .membersCanCreatePrivateRepositories(java.lang.Boolean|IResolvable)
//  .membersCanCreatePublicPages(java.lang.Boolean|IResolvable)
//  .membersCanCreatePublicRepositories(java.lang.Boolean|IResolvable)
//  .membersCanCreateRepositories(java.lang.Boolean|IResolvable)
//  .membersCanForkPrivateRepositories(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .secretScanningEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .secretScanningPushProtectionEnabledForNewRepositories(java.lang.Boolean|IResolvable)
//  .twitterUsername(java.lang.String)
//  .webCommitSignoffRequired(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.billingEmail">billingEmail</a></code> | <code>java.lang.String</code> | The billing email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.advancedSecurityEnabledForNewRepositories">advancedSecurityEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not advanced security is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.blog">blog</a></code> | <code>java.lang.String</code> | The blog URL for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.company">company</a></code> | <code>java.lang.String</code> | The company name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.defaultRepositoryPermission">defaultRepositoryPermission</a></code> | <code>java.lang.String</code> | The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotAlertsEnabledForNewRepositories">dependabotAlertsEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not dependabot alerts are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotSecurityUpdatesEnabledForNewRepositories">dependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not dependabot security updates are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependencyGraphEnabledForNewRepositories">dependencyGraphEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not dependency graph is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.email">email</a></code> | <code>java.lang.String</code> | The email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasOrganizationProjects">hasOrganizationProjects</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasRepositoryProjects">hasRepositoryProjects</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not repository projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateInternalRepositories">membersCanCreateInternalRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new internal repositories. For Enterprise Organizations only. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePages">membersCanCreatePages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivatePages">membersCanCreatePrivatePages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new private pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivateRepositories">membersCanCreatePrivateRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicPages">membersCanCreatePublicPages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new public pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicRepositories">membersCanCreatePublicRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new public repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateRepositories">membersCanCreateRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can create new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanForkPrivateRepositories">membersCanForkPrivateRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not organization members can fork private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningEnabledForNewRepositories">secretScanningEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not secret scanning is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories">secretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not secret scanning push protection is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.twitterUsername">twitterUsername</a></code> | <code>java.lang.String</code> | The Twitter username for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.webCommitSignoffRequired">webCommitSignoffRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not commit signatures are required for commits to the organization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingEmail`<sup>Required</sup> <a name="billingEmail" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.billingEmail"></a>

```java
public java.lang.String getBillingEmail();
```

- *Type:* java.lang.String

The billing email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#billing_email OrganizationSettings#billing_email}

---

##### `advancedSecurityEnabledForNewRepositories`<sup>Optional</sup> <a name="advancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.advancedSecurityEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getAdvancedSecurityEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not advanced security is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#advanced_security_enabled_for_new_repositories OrganizationSettings#advanced_security_enabled_for_new_repositories}

---

##### `blog`<sup>Optional</sup> <a name="blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.blog"></a>

```java
public java.lang.String getBlog();
```

- *Type:* java.lang.String

The blog URL for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#blog OrganizationSettings#blog}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.company"></a>

```java
public java.lang.String getCompany();
```

- *Type:* java.lang.String

The company name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#company OrganizationSettings#company}

---

##### `defaultRepositoryPermission`<sup>Optional</sup> <a name="defaultRepositoryPermission" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.defaultRepositoryPermission"></a>

```java
public java.lang.String getDefaultRepositoryPermission();
```

- *Type:* java.lang.String

The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#default_repository_permission OrganizationSettings#default_repository_permission}

---

##### `dependabotAlertsEnabledForNewRepositories`<sup>Optional</sup> <a name="dependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotAlertsEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getDependabotAlertsEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not dependabot alerts are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#dependabot_alerts_enabled_for_new_repositories OrganizationSettings#dependabot_alerts_enabled_for_new_repositories}

---

##### `dependabotSecurityUpdatesEnabledForNewRepositories`<sup>Optional</sup> <a name="dependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getDependabotSecurityUpdatesEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not dependabot security updates are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#dependabot_security_updates_enabled_for_new_repositories OrganizationSettings#dependabot_security_updates_enabled_for_new_repositories}

---

##### `dependencyGraphEnabledForNewRepositories`<sup>Optional</sup> <a name="dependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependencyGraphEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getDependencyGraphEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not dependency graph is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#dependency_graph_enabled_for_new_repositories OrganizationSettings#dependency_graph_enabled_for_new_repositories}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#description OrganizationSettings#description}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#email OrganizationSettings#email}

---

##### `hasOrganizationProjects`<sup>Optional</sup> <a name="hasOrganizationProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasOrganizationProjects"></a>

```java
public java.lang.Boolean|IResolvable getHasOrganizationProjects();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#has_organization_projects OrganizationSettings#has_organization_projects}

---

##### `hasRepositoryProjects`<sup>Optional</sup> <a name="hasRepositoryProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasRepositoryProjects"></a>

```java
public java.lang.Boolean|IResolvable getHasRepositoryProjects();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not repository projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#has_repository_projects OrganizationSettings#has_repository_projects}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#location OrganizationSettings#location}

---

##### `membersCanCreateInternalRepositories`<sup>Optional</sup> <a name="membersCanCreateInternalRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateInternalRepositories"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreateInternalRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new internal repositories. For Enterprise Organizations only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_internal_repositories OrganizationSettings#members_can_create_internal_repositories}

---

##### `membersCanCreatePages`<sup>Optional</sup> <a name="membersCanCreatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePages"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePages();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_pages OrganizationSettings#members_can_create_pages}

---

##### `membersCanCreatePrivatePages`<sup>Optional</sup> <a name="membersCanCreatePrivatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivatePages"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePrivatePages();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new private pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_private_pages OrganizationSettings#members_can_create_private_pages}

---

##### `membersCanCreatePrivateRepositories`<sup>Optional</sup> <a name="membersCanCreatePrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivateRepositories"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePrivateRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_private_repositories OrganizationSettings#members_can_create_private_repositories}

---

##### `membersCanCreatePublicPages`<sup>Optional</sup> <a name="membersCanCreatePublicPages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicPages"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePublicPages();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new public pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_public_pages OrganizationSettings#members_can_create_public_pages}

---

##### `membersCanCreatePublicRepositories`<sup>Optional</sup> <a name="membersCanCreatePublicRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicRepositories"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreatePublicRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new public repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_public_repositories OrganizationSettings#members_can_create_public_repositories}

---

##### `membersCanCreateRepositories`<sup>Optional</sup> <a name="membersCanCreateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateRepositories"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanCreateRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can create new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_create_repositories OrganizationSettings#members_can_create_repositories}

---

##### `membersCanForkPrivateRepositories`<sup>Optional</sup> <a name="membersCanForkPrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanForkPrivateRepositories"></a>

```java
public java.lang.Boolean|IResolvable getMembersCanForkPrivateRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not organization members can fork private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#members_can_fork_private_repositories OrganizationSettings#members_can_fork_private_repositories}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `secretScanningEnabledForNewRepositories`<sup>Optional</sup> <a name="secretScanningEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getSecretScanningEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not secret scanning is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#secret_scanning_enabled_for_new_repositories OrganizationSettings#secret_scanning_enabled_for_new_repositories}

---

##### `secretScanningPushProtectionEnabledForNewRepositories`<sup>Optional</sup> <a name="secretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```java
public java.lang.Boolean|IResolvable getSecretScanningPushProtectionEnabledForNewRepositories();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not secret scanning push protection is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#secret_scanning_push_protection_enabled_for_new_repositories OrganizationSettings#secret_scanning_push_protection_enabled_for_new_repositories}

---

##### `twitterUsername`<sup>Optional</sup> <a name="twitterUsername" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.twitterUsername"></a>

```java
public java.lang.String getTwitterUsername();
```

- *Type:* java.lang.String

The Twitter username for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#twitter_username OrganizationSettings#twitter_username}

---

##### `webCommitSignoffRequired`<sup>Optional</sup> <a name="webCommitSignoffRequired" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.webCommitSignoffRequired"></a>

```java
public java.lang.Boolean|IResolvable getWebCommitSignoffRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not commit signatures are required for commits to the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_settings#web_commit_signoff_required OrganizationSettings#web_commit_signoff_required}

---



