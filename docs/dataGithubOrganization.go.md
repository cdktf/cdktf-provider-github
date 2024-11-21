# `dataGithubOrganization` Submodule <a name="`dataGithubOrganization` Submodule" id="@cdktf/provider-github.dataGithubOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganization <a name="DataGithubOrganization" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/data-sources/organization github_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithuborganization"

datagithuborganization.NewDataGithubOrganization(scope Construct, id *string, config DataGithubOrganizationConfig) DataGithubOrganization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig">DataGithubOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig">DataGithubOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.resetIgnoreArchivedRepos">ResetIgnoreArchivedRepos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.resetSummaryOnly">ResetSummaryOnly</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreArchivedRepos` <a name="ResetIgnoreArchivedRepos" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.resetIgnoreArchivedRepos"></a>

```go
func ResetIgnoreArchivedRepos()
```

##### `ResetSummaryOnly` <a name="ResetSummaryOnly" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.resetSummaryOnly"></a>

```go
func ResetSummaryOnly()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithuborganization"

datagithuborganization.DataGithubOrganization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithuborganization"

datagithuborganization.DataGithubOrganization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithuborganization"

datagithuborganization.DataGithubOrganization_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithuborganization"

datagithuborganization.DataGithubOrganization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGithubOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGithubOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGithubOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.defaultRepositoryPermission">DefaultRepositoryPermission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotAlertsEnabledForNewRepositories">DependabotAlertsEnabledForNewRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotSecurityUpdatesEnabledForNewRepositories">DependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependencyGraphEnabledForNewRepositories">DependencyGraphEnabledForNewRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersAllowedRepositoryCreationType">MembersAllowedRepositoryCreationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateInternalRepositories">MembersCanCreateInternalRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePages">MembersCanCreatePages</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivatePages">MembersCanCreatePrivatePages</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivateRepositories">MembersCanCreatePrivateRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicPages">MembersCanCreatePublicPages</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicRepositories">MembersCanCreatePublicRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateRepositories">MembersCanCreateRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanForkPrivateRepositories">MembersCanForkPrivateRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.orgname">Orgname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.repositories">Repositories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.twoFactorRequirementEnabled">TwoFactorRequirementEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.users">Users</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.webCommitSignoffRequired">WebCommitSignoffRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedReposInput">IgnoreArchivedReposInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnlyInput">SummaryOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedRepos">IgnoreArchivedRepos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnly">SummaryOnly</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Required</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.advancedSecurityEnabledForNewRepositories"></a>

```go
func AdvancedSecurityEnabledForNewRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DefaultRepositoryPermission`<sup>Required</sup> <a name="DefaultRepositoryPermission" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.defaultRepositoryPermission"></a>

```go
func DefaultRepositoryPermission() *string
```

- *Type:* *string

---

##### `DependabotAlertsEnabledForNewRepositories`<sup>Required</sup> <a name="DependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotAlertsEnabledForNewRepositories"></a>

```go
func DependabotAlertsEnabledForNewRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DependabotSecurityUpdatesEnabledForNewRepositories`<sup>Required</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```go
func DependabotSecurityUpdatesEnabledForNewRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DependencyGraphEnabledForNewRepositories`<sup>Required</sup> <a name="DependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependencyGraphEnabledForNewRepositories"></a>

```go
func DependencyGraphEnabledForNewRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `MembersAllowedRepositoryCreationType`<sup>Required</sup> <a name="MembersAllowedRepositoryCreationType" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersAllowedRepositoryCreationType"></a>

```go
func MembersAllowedRepositoryCreationType() *string
```

- *Type:* *string

---

##### `MembersCanCreateInternalRepositories`<sup>Required</sup> <a name="MembersCanCreateInternalRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateInternalRepositories"></a>

```go
func MembersCanCreateInternalRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MembersCanCreatePages`<sup>Required</sup> <a name="MembersCanCreatePages" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePages"></a>

```go
func MembersCanCreatePages() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MembersCanCreatePrivatePages`<sup>Required</sup> <a name="MembersCanCreatePrivatePages" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivatePages"></a>

```go
func MembersCanCreatePrivatePages() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MembersCanCreatePrivateRepositories`<sup>Required</sup> <a name="MembersCanCreatePrivateRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivateRepositories"></a>

```go
func MembersCanCreatePrivateRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MembersCanCreatePublicPages`<sup>Required</sup> <a name="MembersCanCreatePublicPages" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicPages"></a>

```go
func MembersCanCreatePublicPages() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MembersCanCreatePublicRepositories`<sup>Required</sup> <a name="MembersCanCreatePublicRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicRepositories"></a>

```go
func MembersCanCreatePublicRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MembersCanCreateRepositories`<sup>Required</sup> <a name="MembersCanCreateRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateRepositories"></a>

```go
func MembersCanCreateRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MembersCanForkPrivateRepositories`<sup>Required</sup> <a name="MembersCanForkPrivateRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanForkPrivateRepositories"></a>

```go
func MembersCanForkPrivateRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `Orgname`<sup>Required</sup> <a name="Orgname" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.orgname"></a>

```go
func Orgname() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.repositories"></a>

```go
func Repositories() *[]*string
```

- *Type:* *[]*string

---

##### `SecretScanningEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningEnabledForNewRepositories"></a>

```go
func SecretScanningEnabledForNewRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```go
func SecretScanningPushProtectionEnabledForNewRepositories() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TwoFactorRequirementEnabled`<sup>Required</sup> <a name="TwoFactorRequirementEnabled" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.twoFactorRequirementEnabled"></a>

```go
func TwoFactorRequirementEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.users"></a>

```go
func Users() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `WebCommitSignoffRequired`<sup>Required</sup> <a name="WebCommitSignoffRequired" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.webCommitSignoffRequired"></a>

```go
func WebCommitSignoffRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreArchivedReposInput`<sup>Optional</sup> <a name="IgnoreArchivedReposInput" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedReposInput"></a>

```go
func IgnoreArchivedReposInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SummaryOnlyInput`<sup>Optional</sup> <a name="SummaryOnlyInput" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnlyInput"></a>

```go
func SummaryOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreArchivedRepos`<sup>Required</sup> <a name="IgnoreArchivedRepos" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedRepos"></a>

```go
func IgnoreArchivedRepos() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SummaryOnly`<sup>Required</sup> <a name="SummaryOnly" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnly"></a>

```go
func SummaryOnly() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationConfig <a name="DataGithubOrganizationConfig" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithuborganization"

&datagithuborganization.DataGithubOrganizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	IgnoreArchivedRepos: interface{},
	SummaryOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/data-sources/organization#name DataGithubOrganization#name}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/data-sources/organization#id DataGithubOrganization#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.ignoreArchivedRepos">IgnoreArchivedRepos</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/data-sources/organization#ignore_archived_repos DataGithubOrganization#ignore_archived_repos}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.summaryOnly">SummaryOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/data-sources/organization#summary_only DataGithubOrganization#summary_only}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/data-sources/organization#name DataGithubOrganization#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/data-sources/organization#id DataGithubOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreArchivedRepos`<sup>Optional</sup> <a name="IgnoreArchivedRepos" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.ignoreArchivedRepos"></a>

```go
IgnoreArchivedRepos interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/data-sources/organization#ignore_archived_repos DataGithubOrganization#ignore_archived_repos}.

---

##### `SummaryOnly`<sup>Optional</sup> <a name="SummaryOnly" id="@cdktf/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.summaryOnly"></a>

```go
SummaryOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/data-sources/organization#summary_only DataGithubOrganization#summary_only}.

---



