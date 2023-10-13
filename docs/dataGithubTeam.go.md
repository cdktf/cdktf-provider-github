# `data_github_team`

Refer to the Terraform Registory for docs: [`data_github_team`](https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team).

# `dataGithubTeam` Submodule <a name="`dataGithubTeam` Submodule" id="@cdktf/provider-github.dataGithubTeam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubTeam <a name="DataGithubTeam" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team github_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/datagithubteam"

datagithubteam.NewDataGithubTeam(scope Construct, id *string, config DataGithubTeamConfig) DataGithubTeam
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig">DataGithubTeamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig">DataGithubTeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetMembershipType">ResetMembershipType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetResultsPerPage">ResetResultsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetSummaryOnly">ResetSummaryOnly</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetId"></a>

```go
func ResetId()
```

##### `ResetMembershipType` <a name="ResetMembershipType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetMembershipType"></a>

```go
func ResetMembershipType()
```

##### `ResetResultsPerPage` <a name="ResetResultsPerPage" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetResultsPerPage"></a>

```go
func ResetResultsPerPage()
```

##### `ResetSummaryOnly` <a name="ResetSummaryOnly" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetSummaryOnly"></a>

```go
func ResetSummaryOnly()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/datagithubteam"

datagithubteam.DataGithubTeam_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/datagithubteam"

datagithubteam.DataGithubTeam_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/datagithubteam"

datagithubteam.DataGithubTeam_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.privacy">Privacy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.repositories">Repositories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.repositoriesDetailed">RepositoriesDetailed</a></code> | <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList">DataGithubTeamRepositoriesDetailedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipTypeInput">MembershipTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPageInput">ResultsPerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slugInput">SlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnlyInput">SummaryOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipType">MembershipType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPage">ResultsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slug">Slug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnly">SummaryOnly</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.privacy"></a>

```go
func Privacy() *string
```

- *Type:* *string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.repositories"></a>

```go
func Repositories() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoriesDetailed`<sup>Required</sup> <a name="RepositoriesDetailed" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.repositoriesDetailed"></a>

```go
func RepositoriesDetailed() DataGithubTeamRepositoriesDetailedList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList">DataGithubTeamRepositoriesDetailedList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembershipTypeInput`<sup>Optional</sup> <a name="MembershipTypeInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipTypeInput"></a>

```go
func MembershipTypeInput() *string
```

- *Type:* *string

---

##### `ResultsPerPageInput`<sup>Optional</sup> <a name="ResultsPerPageInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPageInput"></a>

```go
func ResultsPerPageInput() *f64
```

- *Type:* *f64

---

##### `SlugInput`<sup>Optional</sup> <a name="SlugInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slugInput"></a>

```go
func SlugInput() *string
```

- *Type:* *string

---

##### `SummaryOnlyInput`<sup>Optional</sup> <a name="SummaryOnlyInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnlyInput"></a>

```go
func SummaryOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MembershipType`<sup>Required</sup> <a name="MembershipType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipType"></a>

```go
func MembershipType() *string
```

- *Type:* *string

---

##### `ResultsPerPage`<sup>Required</sup> <a name="ResultsPerPage" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPage"></a>

```go
func ResultsPerPage() *f64
```

- *Type:* *f64

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slug"></a>

```go
func Slug() *string
```

- *Type:* *string

---

##### `SummaryOnly`<sup>Required</sup> <a name="SummaryOnly" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnly"></a>

```go
func SummaryOnly() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubTeamConfig <a name="DataGithubTeamConfig" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/datagithubteam"

&datagithubteam.DataGithubTeamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Slug: *string,
	Id: *string,
	MembershipType: *string,
	ResultsPerPage: *f64,
	SummaryOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.slug">Slug</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team#slug DataGithubTeam#slug}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team#id DataGithubTeam#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.membershipType">MembershipType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team#membership_type DataGithubTeam#membership_type}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.resultsPerPage">ResultsPerPage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team#results_per_page DataGithubTeam#results_per_page}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.summaryOnly">SummaryOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team#summary_only DataGithubTeam#summary_only}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.slug"></a>

```go
Slug *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team#slug DataGithubTeam#slug}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team#id DataGithubTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MembershipType`<sup>Optional</sup> <a name="MembershipType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.membershipType"></a>

```go
MembershipType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team#membership_type DataGithubTeam#membership_type}.

---

##### `ResultsPerPage`<sup>Optional</sup> <a name="ResultsPerPage" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.resultsPerPage"></a>

```go
ResultsPerPage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team#results_per_page DataGithubTeam#results_per_page}.

---

##### `SummaryOnly`<sup>Optional</sup> <a name="SummaryOnly" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.summaryOnly"></a>

```go
SummaryOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/team#summary_only DataGithubTeam#summary_only}.

---

### DataGithubTeamRepositoriesDetailed <a name="DataGithubTeamRepositoriesDetailed" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailed.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/datagithubteam"

&datagithubteam.DataGithubTeamRepositoriesDetailed {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubTeamRepositoriesDetailedList <a name="DataGithubTeamRepositoriesDetailedList" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/datagithubteam"

datagithubteam.NewDataGithubTeamRepositoriesDetailedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGithubTeamRepositoriesDetailedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.get"></a>

```go
func Get(index *f64) DataGithubTeamRepositoriesDetailedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGithubTeamRepositoriesDetailedOutputReference <a name="DataGithubTeamRepositoriesDetailedOutputReference" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v11/datagithubteam"

datagithubteam.NewDataGithubTeamRepositoriesDetailedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGithubTeamRepositoriesDetailedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.repoId">RepoId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailed">DataGithubTeamRepositoriesDetailed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepoId`<sup>Required</sup> <a name="RepoId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.repoId"></a>

```go
func RepoId() *f64
```

- *Type:* *f64

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGithubTeamRepositoriesDetailed
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailed">DataGithubTeamRepositoriesDetailed</a>

---



