# `organizationSettings` Submodule <a name="`organizationSettings` Submodule" id="@cdktf/provider-github.organizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationSettings <a name="OrganizationSettings" id="@cdktf/provider-github.organizationSettings.OrganizationSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/organization_settings github_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/organizationsettings"

organizationsettings.NewOrganizationSettings(scope Construct, id *string, config OrganizationSettingsConfig) OrganizationSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetAdvancedSecurityEnabledForNewRepositories">ResetAdvancedSecurityEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetBlog">ResetBlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetCompany">ResetCompany</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDefaultRepositoryPermission">ResetDefaultRepositoryPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotAlertsEnabledForNewRepositories">ResetDependabotAlertsEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotSecurityUpdatesEnabledForNewRepositories">ResetDependabotSecurityUpdatesEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependencyGraphEnabledForNewRepositories">ResetDependencyGraphEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasOrganizationProjects">ResetHasOrganizationProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasRepositoryProjects">ResetHasRepositoryProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateInternalRepositories">ResetMembersCanCreateInternalRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePages">ResetMembersCanCreatePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivatePages">ResetMembersCanCreatePrivatePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivateRepositories">ResetMembersCanCreatePrivateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicPages">ResetMembersCanCreatePublicPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicRepositories">ResetMembersCanCreatePublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateRepositories">ResetMembersCanCreateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanForkPrivateRepositories">ResetMembersCanForkPrivateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningEnabledForNewRepositories">ResetSecretScanningEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningPushProtectionEnabledForNewRepositories">ResetSecretScanningPushProtectionEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetTwitterUsername">ResetTwitterUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetWebCommitSignoffRequired">ResetWebCommitSignoffRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAdvancedSecurityEnabledForNewRepositories` <a name="ResetAdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetAdvancedSecurityEnabledForNewRepositories"></a>

```go
func ResetAdvancedSecurityEnabledForNewRepositories()
```

##### `ResetBlog` <a name="ResetBlog" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetBlog"></a>

```go
func ResetBlog()
```

##### `ResetCompany` <a name="ResetCompany" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetCompany"></a>

```go
func ResetCompany()
```

##### `ResetDefaultRepositoryPermission` <a name="ResetDefaultRepositoryPermission" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDefaultRepositoryPermission"></a>

```go
func ResetDefaultRepositoryPermission()
```

##### `ResetDependabotAlertsEnabledForNewRepositories` <a name="ResetDependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotAlertsEnabledForNewRepositories"></a>

```go
func ResetDependabotAlertsEnabledForNewRepositories()
```

##### `ResetDependabotSecurityUpdatesEnabledForNewRepositories` <a name="ResetDependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotSecurityUpdatesEnabledForNewRepositories"></a>

```go
func ResetDependabotSecurityUpdatesEnabledForNewRepositories()
```

##### `ResetDependencyGraphEnabledForNewRepositories` <a name="ResetDependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependencyGraphEnabledForNewRepositories"></a>

```go
func ResetDependencyGraphEnabledForNewRepositories()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetHasOrganizationProjects` <a name="ResetHasOrganizationProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasOrganizationProjects"></a>

```go
func ResetHasOrganizationProjects()
```

##### `ResetHasRepositoryProjects` <a name="ResetHasRepositoryProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasRepositoryProjects"></a>

```go
func ResetHasRepositoryProjects()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMembersCanCreateInternalRepositories` <a name="ResetMembersCanCreateInternalRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateInternalRepositories"></a>

```go
func ResetMembersCanCreateInternalRepositories()
```

##### `ResetMembersCanCreatePages` <a name="ResetMembersCanCreatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePages"></a>

```go
func ResetMembersCanCreatePages()
```

##### `ResetMembersCanCreatePrivatePages` <a name="ResetMembersCanCreatePrivatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivatePages"></a>

```go
func ResetMembersCanCreatePrivatePages()
```

##### `ResetMembersCanCreatePrivateRepositories` <a name="ResetMembersCanCreatePrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivateRepositories"></a>

```go
func ResetMembersCanCreatePrivateRepositories()
```

##### `ResetMembersCanCreatePublicPages` <a name="ResetMembersCanCreatePublicPages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicPages"></a>

```go
func ResetMembersCanCreatePublicPages()
```

##### `ResetMembersCanCreatePublicRepositories` <a name="ResetMembersCanCreatePublicRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicRepositories"></a>

```go
func ResetMembersCanCreatePublicRepositories()
```

##### `ResetMembersCanCreateRepositories` <a name="ResetMembersCanCreateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateRepositories"></a>

```go
func ResetMembersCanCreateRepositories()
```

##### `ResetMembersCanForkPrivateRepositories` <a name="ResetMembersCanForkPrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanForkPrivateRepositories"></a>

```go
func ResetMembersCanForkPrivateRepositories()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetName"></a>

```go
func ResetName()
```

##### `ResetSecretScanningEnabledForNewRepositories` <a name="ResetSecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningEnabledForNewRepositories"></a>

```go
func ResetSecretScanningEnabledForNewRepositories()
```

##### `ResetSecretScanningPushProtectionEnabledForNewRepositories` <a name="ResetSecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningPushProtectionEnabledForNewRepositories"></a>

```go
func ResetSecretScanningPushProtectionEnabledForNewRepositories()
```

##### `ResetTwitterUsername` <a name="ResetTwitterUsername" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetTwitterUsername"></a>

```go
func ResetTwitterUsername()
```

##### `ResetWebCommitSignoffRequired` <a name="ResetWebCommitSignoffRequired" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetWebCommitSignoffRequired"></a>

```go
func ResetWebCommitSignoffRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/organizationsettings"

organizationsettings.OrganizationSettings_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/organizationsettings"

organizationsettings.OrganizationSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/organizationsettings"

organizationsettings.OrganizationSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositoriesInput">AdvancedSecurityEnabledForNewRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmailInput">BillingEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blogInput">BlogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.companyInput">CompanyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermissionInput">DefaultRepositoryPermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositoriesInput">DependabotAlertsEnabledForNewRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositoriesInput">DependabotSecurityUpdatesEnabledForNewRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositoriesInput">DependencyGraphEnabledForNewRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjectsInput">HasOrganizationProjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjectsInput">HasRepositoryProjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositoriesInput">MembersCanCreateInternalRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePagesInput">MembersCanCreatePagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePagesInput">MembersCanCreatePrivatePagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositoriesInput">MembersCanCreatePrivateRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPagesInput">MembersCanCreatePublicPagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositoriesInput">MembersCanCreatePublicRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositoriesInput">MembersCanCreateRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositoriesInput">MembersCanForkPrivateRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositoriesInput">SecretScanningEnabledForNewRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput">SecretScanningPushProtectionEnabledForNewRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsernameInput">TwitterUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequiredInput">WebCommitSignoffRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmail">BillingEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blog">Blog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.company">Company</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermission">DefaultRepositoryPermission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositories">DependabotAlertsEnabledForNewRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositories">DependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositories">DependencyGraphEnabledForNewRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjects">HasOrganizationProjects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjects">HasRepositoryProjects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositories">MembersCanCreateInternalRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePages">MembersCanCreatePages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePages">MembersCanCreatePrivatePages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositories">MembersCanCreatePrivateRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPages">MembersCanCreatePublicPages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositories">MembersCanCreatePublicRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositories">MembersCanCreateRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositories">MembersCanForkPrivateRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsername">TwitterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequired">WebCommitSignoffRequired</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedSecurityEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="AdvancedSecurityEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositoriesInput"></a>

```go
func AdvancedSecurityEnabledForNewRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `BillingEmailInput`<sup>Optional</sup> <a name="BillingEmailInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmailInput"></a>

```go
func BillingEmailInput() *string
```

- *Type:* *string

---

##### `BlogInput`<sup>Optional</sup> <a name="BlogInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blogInput"></a>

```go
func BlogInput() *string
```

- *Type:* *string

---

##### `CompanyInput`<sup>Optional</sup> <a name="CompanyInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.companyInput"></a>

```go
func CompanyInput() *string
```

- *Type:* *string

---

##### `DefaultRepositoryPermissionInput`<sup>Optional</sup> <a name="DefaultRepositoryPermissionInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermissionInput"></a>

```go
func DefaultRepositoryPermissionInput() *string
```

- *Type:* *string

---

##### `DependabotAlertsEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="DependabotAlertsEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositoriesInput"></a>

```go
func DependabotAlertsEnabledForNewRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `DependabotSecurityUpdatesEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositoriesInput"></a>

```go
func DependabotSecurityUpdatesEnabledForNewRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `DependencyGraphEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="DependencyGraphEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositoriesInput"></a>

```go
func DependencyGraphEnabledForNewRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `HasOrganizationProjectsInput`<sup>Optional</sup> <a name="HasOrganizationProjectsInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjectsInput"></a>

```go
func HasOrganizationProjectsInput() interface{}
```

- *Type:* interface{}

---

##### `HasRepositoryProjectsInput`<sup>Optional</sup> <a name="HasRepositoryProjectsInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjectsInput"></a>

```go
func HasRepositoryProjectsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersCanCreateInternalRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreateInternalRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositoriesInput"></a>

```go
func MembersCanCreateInternalRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreatePagesInput`<sup>Optional</sup> <a name="MembersCanCreatePagesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePagesInput"></a>

```go
func MembersCanCreatePagesInput() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreatePrivatePagesInput`<sup>Optional</sup> <a name="MembersCanCreatePrivatePagesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePagesInput"></a>

```go
func MembersCanCreatePrivatePagesInput() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreatePrivateRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreatePrivateRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositoriesInput"></a>

```go
func MembersCanCreatePrivateRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreatePublicPagesInput`<sup>Optional</sup> <a name="MembersCanCreatePublicPagesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPagesInput"></a>

```go
func MembersCanCreatePublicPagesInput() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreatePublicRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreatePublicRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositoriesInput"></a>

```go
func MembersCanCreatePublicRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreateRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreateRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositoriesInput"></a>

```go
func MembersCanCreateRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `MembersCanForkPrivateRepositoriesInput`<sup>Optional</sup> <a name="MembersCanForkPrivateRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositoriesInput"></a>

```go
func MembersCanForkPrivateRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretScanningEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="SecretScanningEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositoriesInput"></a>

```go
func SecretScanningEnabledForNewRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `SecretScanningPushProtectionEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput"></a>

```go
func SecretScanningPushProtectionEnabledForNewRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `TwitterUsernameInput`<sup>Optional</sup> <a name="TwitterUsernameInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsernameInput"></a>

```go
func TwitterUsernameInput() *string
```

- *Type:* *string

---

##### `WebCommitSignoffRequiredInput`<sup>Optional</sup> <a name="WebCommitSignoffRequiredInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequiredInput"></a>

```go
func WebCommitSignoffRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Required</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositories"></a>

```go
func AdvancedSecurityEnabledForNewRepositories() interface{}
```

- *Type:* interface{}

---

##### `BillingEmail`<sup>Required</sup> <a name="BillingEmail" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmail"></a>

```go
func BillingEmail() *string
```

- *Type:* *string

---

##### `Blog`<sup>Required</sup> <a name="Blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blog"></a>

```go
func Blog() *string
```

- *Type:* *string

---

##### `Company`<sup>Required</sup> <a name="Company" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.company"></a>

```go
func Company() *string
```

- *Type:* *string

---

##### `DefaultRepositoryPermission`<sup>Required</sup> <a name="DefaultRepositoryPermission" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermission"></a>

```go
func DefaultRepositoryPermission() *string
```

- *Type:* *string

---

##### `DependabotAlertsEnabledForNewRepositories`<sup>Required</sup> <a name="DependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositories"></a>

```go
func DependabotAlertsEnabledForNewRepositories() interface{}
```

- *Type:* interface{}

---

##### `DependabotSecurityUpdatesEnabledForNewRepositories`<sup>Required</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```go
func DependabotSecurityUpdatesEnabledForNewRepositories() interface{}
```

- *Type:* interface{}

---

##### `DependencyGraphEnabledForNewRepositories`<sup>Required</sup> <a name="DependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositories"></a>

```go
func DependencyGraphEnabledForNewRepositories() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `HasOrganizationProjects`<sup>Required</sup> <a name="HasOrganizationProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjects"></a>

```go
func HasOrganizationProjects() interface{}
```

- *Type:* interface{}

---

##### `HasRepositoryProjects`<sup>Required</sup> <a name="HasRepositoryProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjects"></a>

```go
func HasRepositoryProjects() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MembersCanCreateInternalRepositories`<sup>Required</sup> <a name="MembersCanCreateInternalRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositories"></a>

```go
func MembersCanCreateInternalRepositories() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreatePages`<sup>Required</sup> <a name="MembersCanCreatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePages"></a>

```go
func MembersCanCreatePages() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreatePrivatePages`<sup>Required</sup> <a name="MembersCanCreatePrivatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePages"></a>

```go
func MembersCanCreatePrivatePages() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreatePrivateRepositories`<sup>Required</sup> <a name="MembersCanCreatePrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositories"></a>

```go
func MembersCanCreatePrivateRepositories() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreatePublicPages`<sup>Required</sup> <a name="MembersCanCreatePublicPages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPages"></a>

```go
func MembersCanCreatePublicPages() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreatePublicRepositories`<sup>Required</sup> <a name="MembersCanCreatePublicRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositories"></a>

```go
func MembersCanCreatePublicRepositories() interface{}
```

- *Type:* interface{}

---

##### `MembersCanCreateRepositories`<sup>Required</sup> <a name="MembersCanCreateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositories"></a>

```go
func MembersCanCreateRepositories() interface{}
```

- *Type:* interface{}

---

##### `MembersCanForkPrivateRepositories`<sup>Required</sup> <a name="MembersCanForkPrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositories"></a>

```go
func MembersCanForkPrivateRepositories() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretScanningEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositories"></a>

```go
func SecretScanningEnabledForNewRepositories() interface{}
```

- *Type:* interface{}

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```go
func SecretScanningPushProtectionEnabledForNewRepositories() interface{}
```

- *Type:* interface{}

---

##### `TwitterUsername`<sup>Required</sup> <a name="TwitterUsername" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsername"></a>

```go
func TwitterUsername() *string
```

- *Type:* *string

---

##### `WebCommitSignoffRequired`<sup>Required</sup> <a name="WebCommitSignoffRequired" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequired"></a>

```go
func WebCommitSignoffRequired() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationSettingsConfig <a name="OrganizationSettingsConfig" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/organizationsettings"

&organizationsettings.OrganizationSettingsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingEmail: *string,
	AdvancedSecurityEnabledForNewRepositories: interface{},
	Blog: *string,
	Company: *string,
	DefaultRepositoryPermission: *string,
	DependabotAlertsEnabledForNewRepositories: interface{},
	DependabotSecurityUpdatesEnabledForNewRepositories: interface{},
	DependencyGraphEnabledForNewRepositories: interface{},
	Description: *string,
	Email: *string,
	HasOrganizationProjects: interface{},
	HasRepositoryProjects: interface{},
	Id: *string,
	Location: *string,
	MembersCanCreateInternalRepositories: interface{},
	MembersCanCreatePages: interface{},
	MembersCanCreatePrivatePages: interface{},
	MembersCanCreatePrivateRepositories: interface{},
	MembersCanCreatePublicPages: interface{},
	MembersCanCreatePublicRepositories: interface{},
	MembersCanCreateRepositories: interface{},
	MembersCanForkPrivateRepositories: interface{},
	Name: *string,
	SecretScanningEnabledForNewRepositories: interface{},
	SecretScanningPushProtectionEnabledForNewRepositories: interface{},
	TwitterUsername: *string,
	WebCommitSignoffRequired: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.billingEmail">BillingEmail</a></code> | <code>*string</code> | The billing email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>interface{}</code> | Whether or not advanced security is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.blog">Blog</a></code> | <code>*string</code> | The blog URL for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.company">Company</a></code> | <code>*string</code> | The company name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.defaultRepositoryPermission">DefaultRepositoryPermission</a></code> | <code>*string</code> | The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotAlertsEnabledForNewRepositories">DependabotAlertsEnabledForNewRepositories</a></code> | <code>interface{}</code> | Whether or not dependabot alerts are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotSecurityUpdatesEnabledForNewRepositories">DependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>interface{}</code> | Whether or not dependabot security updates are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependencyGraphEnabledForNewRepositories">DependencyGraphEnabledForNewRepositories</a></code> | <code>interface{}</code> | Whether or not dependency graph is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.description">Description</a></code> | <code>*string</code> | The description for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.email">Email</a></code> | <code>*string</code> | The email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasOrganizationProjects">HasOrganizationProjects</a></code> | <code>interface{}</code> | Whether or not organization projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasRepositoryProjects">HasRepositoryProjects</a></code> | <code>interface{}</code> | Whether or not repository projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.location">Location</a></code> | <code>*string</code> | The location for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateInternalRepositories">MembersCanCreateInternalRepositories</a></code> | <code>interface{}</code> | Whether or not organization members can create new internal repositories. For Enterprise Organizations only. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePages">MembersCanCreatePages</a></code> | <code>interface{}</code> | Whether or not organization members can create new pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivatePages">MembersCanCreatePrivatePages</a></code> | <code>interface{}</code> | Whether or not organization members can create new private pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivateRepositories">MembersCanCreatePrivateRepositories</a></code> | <code>interface{}</code> | Whether or not organization members can create new private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicPages">MembersCanCreatePublicPages</a></code> | <code>interface{}</code> | Whether or not organization members can create new public pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicRepositories">MembersCanCreatePublicRepositories</a></code> | <code>interface{}</code> | Whether or not organization members can create new public repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateRepositories">MembersCanCreateRepositories</a></code> | <code>interface{}</code> | Whether or not organization members can create new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanForkPrivateRepositories">MembersCanForkPrivateRepositories</a></code> | <code>interface{}</code> | Whether or not organization members can fork private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.name">Name</a></code> | <code>*string</code> | The name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>interface{}</code> | Whether or not secret scanning is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>interface{}</code> | Whether or not secret scanning push protection is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.twitterUsername">TwitterUsername</a></code> | <code>*string</code> | The Twitter username for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.webCommitSignoffRequired">WebCommitSignoffRequired</a></code> | <code>interface{}</code> | Whether or not commit signatures are required for commits to the organization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingEmail`<sup>Required</sup> <a name="BillingEmail" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.billingEmail"></a>

```go
BillingEmail *string
```

- *Type:* *string

The billing email address for the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#billing_email OrganizationSettings#billing_email}

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Optional</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.advancedSecurityEnabledForNewRepositories"></a>

```go
AdvancedSecurityEnabledForNewRepositories interface{}
```

- *Type:* interface{}

Whether or not advanced security is enabled for new repositories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#advanced_security_enabled_for_new_repositories OrganizationSettings#advanced_security_enabled_for_new_repositories}

---

##### `Blog`<sup>Optional</sup> <a name="Blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.blog"></a>

```go
Blog *string
```

- *Type:* *string

The blog URL for the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#blog OrganizationSettings#blog}

---

##### `Company`<sup>Optional</sup> <a name="Company" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.company"></a>

```go
Company *string
```

- *Type:* *string

The company name for the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#company OrganizationSettings#company}

---

##### `DefaultRepositoryPermission`<sup>Optional</sup> <a name="DefaultRepositoryPermission" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.defaultRepositoryPermission"></a>

```go
DefaultRepositoryPermission *string
```

- *Type:* *string

The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#default_repository_permission OrganizationSettings#default_repository_permission}

---

##### `DependabotAlertsEnabledForNewRepositories`<sup>Optional</sup> <a name="DependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotAlertsEnabledForNewRepositories"></a>

```go
DependabotAlertsEnabledForNewRepositories interface{}
```

- *Type:* interface{}

Whether or not dependabot alerts are enabled for new repositories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#dependabot_alerts_enabled_for_new_repositories OrganizationSettings#dependabot_alerts_enabled_for_new_repositories}

---

##### `DependabotSecurityUpdatesEnabledForNewRepositories`<sup>Optional</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```go
DependabotSecurityUpdatesEnabledForNewRepositories interface{}
```

- *Type:* interface{}

Whether or not dependabot security updates are enabled for new repositories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#dependabot_security_updates_enabled_for_new_repositories OrganizationSettings#dependabot_security_updates_enabled_for_new_repositories}

---

##### `DependencyGraphEnabledForNewRepositories`<sup>Optional</sup> <a name="DependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependencyGraphEnabledForNewRepositories"></a>

```go
DependencyGraphEnabledForNewRepositories interface{}
```

- *Type:* interface{}

Whether or not dependency graph is enabled for new repositories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#dependency_graph_enabled_for_new_repositories OrganizationSettings#dependency_graph_enabled_for_new_repositories}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description for the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#description OrganizationSettings#description}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

The email address for the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#email OrganizationSettings#email}

---

##### `HasOrganizationProjects`<sup>Optional</sup> <a name="HasOrganizationProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasOrganizationProjects"></a>

```go
HasOrganizationProjects interface{}
```

- *Type:* interface{}

Whether or not organization projects are enabled for the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#has_organization_projects OrganizationSettings#has_organization_projects}

---

##### `HasRepositoryProjects`<sup>Optional</sup> <a name="HasRepositoryProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasRepositoryProjects"></a>

```go
HasRepositoryProjects interface{}
```

- *Type:* interface{}

Whether or not repository projects are enabled for the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#has_repository_projects OrganizationSettings#has_repository_projects}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#location OrganizationSettings#location}

---

##### `MembersCanCreateInternalRepositories`<sup>Optional</sup> <a name="MembersCanCreateInternalRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateInternalRepositories"></a>

```go
MembersCanCreateInternalRepositories interface{}
```

- *Type:* interface{}

Whether or not organization members can create new internal repositories. For Enterprise Organizations only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#members_can_create_internal_repositories OrganizationSettings#members_can_create_internal_repositories}

---

##### `MembersCanCreatePages`<sup>Optional</sup> <a name="MembersCanCreatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePages"></a>

```go
MembersCanCreatePages interface{}
```

- *Type:* interface{}

Whether or not organization members can create new pages.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#members_can_create_pages OrganizationSettings#members_can_create_pages}

---

##### `MembersCanCreatePrivatePages`<sup>Optional</sup> <a name="MembersCanCreatePrivatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivatePages"></a>

```go
MembersCanCreatePrivatePages interface{}
```

- *Type:* interface{}

Whether or not organization members can create new private pages.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#members_can_create_private_pages OrganizationSettings#members_can_create_private_pages}

---

##### `MembersCanCreatePrivateRepositories`<sup>Optional</sup> <a name="MembersCanCreatePrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivateRepositories"></a>

```go
MembersCanCreatePrivateRepositories interface{}
```

- *Type:* interface{}

Whether or not organization members can create new private repositories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#members_can_create_private_repositories OrganizationSettings#members_can_create_private_repositories}

---

##### `MembersCanCreatePublicPages`<sup>Optional</sup> <a name="MembersCanCreatePublicPages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicPages"></a>

```go
MembersCanCreatePublicPages interface{}
```

- *Type:* interface{}

Whether or not organization members can create new public pages.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#members_can_create_public_pages OrganizationSettings#members_can_create_public_pages}

---

##### `MembersCanCreatePublicRepositories`<sup>Optional</sup> <a name="MembersCanCreatePublicRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicRepositories"></a>

```go
MembersCanCreatePublicRepositories interface{}
```

- *Type:* interface{}

Whether or not organization members can create new public repositories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#members_can_create_public_repositories OrganizationSettings#members_can_create_public_repositories}

---

##### `MembersCanCreateRepositories`<sup>Optional</sup> <a name="MembersCanCreateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateRepositories"></a>

```go
MembersCanCreateRepositories interface{}
```

- *Type:* interface{}

Whether or not organization members can create new repositories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#members_can_create_repositories OrganizationSettings#members_can_create_repositories}

---

##### `MembersCanForkPrivateRepositories`<sup>Optional</sup> <a name="MembersCanForkPrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanForkPrivateRepositories"></a>

```go
MembersCanForkPrivateRepositories interface{}
```

- *Type:* interface{}

Whether or not organization members can fork private repositories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#members_can_fork_private_repositories OrganizationSettings#members_can_fork_private_repositories}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#name OrganizationSettings#name}

---

##### `SecretScanningEnabledForNewRepositories`<sup>Optional</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningEnabledForNewRepositories"></a>

```go
SecretScanningEnabledForNewRepositories interface{}
```

- *Type:* interface{}

Whether or not secret scanning is enabled for new repositories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#secret_scanning_enabled_for_new_repositories OrganizationSettings#secret_scanning_enabled_for_new_repositories}

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Optional</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```go
SecretScanningPushProtectionEnabledForNewRepositories interface{}
```

- *Type:* interface{}

Whether or not secret scanning push protection is enabled for new repositories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#secret_scanning_push_protection_enabled_for_new_repositories OrganizationSettings#secret_scanning_push_protection_enabled_for_new_repositories}

---

##### `TwitterUsername`<sup>Optional</sup> <a name="TwitterUsername" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.twitterUsername"></a>

```go
TwitterUsername *string
```

- *Type:* *string

The Twitter username for the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#twitter_username OrganizationSettings#twitter_username}

---

##### `WebCommitSignoffRequired`<sup>Optional</sup> <a name="WebCommitSignoffRequired" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.webCommitSignoffRequired"></a>

```go
WebCommitSignoffRequired interface{}
```

- *Type:* interface{}

Whether or not commit signatures are required for commits to the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/organization_settings#web_commit_signoff_required OrganizationSettings#web_commit_signoff_required}

---



