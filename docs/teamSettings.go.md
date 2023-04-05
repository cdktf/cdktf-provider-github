# `teamSettings` Submodule <a name="`teamSettings` Submodule" id="@cdktf/provider-github.teamSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSettings <a name="TeamSettings" id="@cdktf/provider-github.teamSettings.TeamSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/team_settings github_team_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSettings.TeamSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/teamsettings"

teamsettings.NewTeamSettings(scope Construct, id *string, config TeamSettingsConfig) TeamSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig">TeamSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig">TeamSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation">PutReviewRequestDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.resetReviewRequestDelegation">ResetReviewRequestDelegation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.teamSettings.TeamSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.teamSettings.TeamSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.teamSettings.TeamSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.teamSettings.TeamSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.teamSettings.TeamSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.teamSettings.TeamSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.teamSettings.TeamSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.teamSettings.TeamSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.teamSettings.TeamSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutReviewRequestDelegation` <a name="PutReviewRequestDelegation" id="@cdktf/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation"></a>

```go
func PutReviewRequestDelegation(value TeamSettingsReviewRequestDelegation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.teamSettings.TeamSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetReviewRequestDelegation` <a name="ResetReviewRequestDelegation" id="@cdktf/provider-github.teamSettings.TeamSettings.resetReviewRequestDelegation"></a>

```go
func ResetReviewRequestDelegation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.teamSettings.TeamSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/teamsettings"

teamsettings.TeamSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSettings.TeamSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.teamSettings.TeamSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/teamsettings"

teamsettings.TeamSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSettings.TeamSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.teamSettings.TeamSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/teamsettings"

teamsettings.TeamSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSettings.TeamSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegation">ReviewRequestDelegation</a></code> | <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference">TeamSettingsReviewRequestDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.teamSlug">TeamSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.teamUid">TeamUid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegationInput">ReviewRequestDelegationInput</a></code> | <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.teamSettings.TeamSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.teamSettings.TeamSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.teamSettings.TeamSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.teamSettings.TeamSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.teamSettings.TeamSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.teamSettings.TeamSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.teamSettings.TeamSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.teamSettings.TeamSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.teamSettings.TeamSettings.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.teamSettings.TeamSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.teamSettings.TeamSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.teamSettings.TeamSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.teamSettings.TeamSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.teamSettings.TeamSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReviewRequestDelegation`<sup>Required</sup> <a name="ReviewRequestDelegation" id="@cdktf/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegation"></a>

```go
func ReviewRequestDelegation() TeamSettingsReviewRequestDelegationOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference">TeamSettingsReviewRequestDelegationOutputReference</a>

---

##### `TeamSlug`<sup>Required</sup> <a name="TeamSlug" id="@cdktf/provider-github.teamSettings.TeamSettings.property.teamSlug"></a>

```go
func TeamSlug() *string
```

- *Type:* *string

---

##### `TeamUid`<sup>Required</sup> <a name="TeamUid" id="@cdktf/provider-github.teamSettings.TeamSettings.property.teamUid"></a>

```go
func TeamUid() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.teamSettings.TeamSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ReviewRequestDelegationInput`<sup>Optional</sup> <a name="ReviewRequestDelegationInput" id="@cdktf/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegationInput"></a>

```go
func ReviewRequestDelegationInput() TeamSettingsReviewRequestDelegation
```

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-github.teamSettings.TeamSettings.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.teamSettings.TeamSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-github.teamSettings.TeamSettings.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.teamSettings.TeamSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSettingsConfig <a name="TeamSettingsConfig" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/teamsettings"

&teamsettings.TeamSettingsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TeamId: *string,
	Id: *string,
	ReviewRequestDelegation: github.com/cdktf/cdktf-provider-github-go/github.teamSettings.TeamSettingsReviewRequestDelegation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.teamId">TeamId</a></code> | <code>*string</code> | The GitHub team id or the GitHub team slug. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_settings#id TeamSettings#id}. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.reviewRequestDelegation">ReviewRequestDelegation</a></code> | <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | review_request_delegation block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

The GitHub team id or the GitHub team slug.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_settings#team_id TeamSettings#team_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_settings#id TeamSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReviewRequestDelegation`<sup>Optional</sup> <a name="ReviewRequestDelegation" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.reviewRequestDelegation"></a>

```go
ReviewRequestDelegation TeamSettingsReviewRequestDelegation
```

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

review_request_delegation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_settings#review_request_delegation TeamSettings#review_request_delegation}

---

### TeamSettingsReviewRequestDelegation <a name="TeamSettingsReviewRequestDelegation" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/teamsettings"

&teamsettings.TeamSettingsReviewRequestDelegation {
	Algorithm: *string,
	MemberCount: *f64,
	Notify: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.algorithm">Algorithm</a></code> | <code>*string</code> | The algorithm to use when assigning pull requests to team members. Supported values are 'ROUND_ROBIN' and 'LOAD_BALANCE'. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.memberCount">MemberCount</a></code> | <code>*f64</code> | The number of team members to assign to a pull request. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.notify">Notify</a></code> | <code>interface{}</code> | whether to notify the entire team when at least one member is also assigned to the pull request. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

The algorithm to use when assigning pull requests to team members. Supported values are 'ROUND_ROBIN' and 'LOAD_BALANCE'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_settings#algorithm TeamSettings#algorithm}

---

##### `MemberCount`<sup>Optional</sup> <a name="MemberCount" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.memberCount"></a>

```go
MemberCount *f64
```

- *Type:* *f64

The number of team members to assign to a pull request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_settings#member_count TeamSettings#member_count}

---

##### `Notify`<sup>Optional</sup> <a name="Notify" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.notify"></a>

```go
Notify interface{}
```

- *Type:* interface{}

whether to notify the entire team when at least one member is also assigned to the pull request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_settings#notify TeamSettings#notify}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSettingsReviewRequestDelegationOutputReference <a name="TeamSettingsReviewRequestDelegationOutputReference" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/teamsettings"

teamsettings.NewTeamSettingsReviewRequestDelegationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamSettingsReviewRequestDelegationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetMemberCount">ResetMemberCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetNotify">ResetNotify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetMemberCount` <a name="ResetMemberCount" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetMemberCount"></a>

```go
func ResetMemberCount()
```

##### `ResetNotify` <a name="ResetNotify" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetNotify"></a>

```go
func ResetNotify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCountInput">MemberCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notifyInput">NotifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCount">MemberCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notify">Notify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `MemberCountInput`<sup>Optional</sup> <a name="MemberCountInput" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCountInput"></a>

```go
func MemberCountInput() *f64
```

- *Type:* *f64

---

##### `NotifyInput`<sup>Optional</sup> <a name="NotifyInput" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notifyInput"></a>

```go
func NotifyInput() interface{}
```

- *Type:* interface{}

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `MemberCount`<sup>Required</sup> <a name="MemberCount" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCount"></a>

```go
func MemberCount() *f64
```

- *Type:* *f64

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notify"></a>

```go
func Notify() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamSettingsReviewRequestDelegation
```

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---



