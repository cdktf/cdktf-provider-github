# `team` Submodule <a name="`team` Submodule" id="@cdktf/provider-github.team"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Team <a name="Team" id="@cdktf/provider-github.team.Team"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team github_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.team.Team.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/team"

team.NewTeam(scope Construct, id *string, config TeamConfig) Team
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.team.TeamConfig">TeamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.team.Team.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.team.Team.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.team.Team.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.team.TeamConfig">TeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.team.Team.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.team.Team.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.team.Team.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.team.Team.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.team.Team.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.team.Team.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.team.Team.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.team.Team.resetCreateDefaultMaintainer">ResetCreateDefaultMaintainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetLdapDn">ResetLdapDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamId">ResetParentTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamReadId">ResetParentTeamReadId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamReadSlug">ResetParentTeamReadSlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetPrivacy">ResetPrivacy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.team.Team.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.team.Team.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.team.Team.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.team.Team.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.team.Team.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.team.Team.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.team.Team.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.team.Team.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.team.Team.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.team.Team.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.team.Team.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.team.Team.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.team.Team.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.team.Team.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.team.Team.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.team.Team.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.team.Team.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.team.Team.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.team.Team.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.team.Team.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.team.Team.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.team.Team.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.team.Team.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.team.Team.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.team.Team.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.team.Team.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.team.Team.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.team.Team.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.team.Team.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.team.Team.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.team.Team.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.team.Team.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.team.Team.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCreateDefaultMaintainer` <a name="ResetCreateDefaultMaintainer" id="@cdktf/provider-github.team.Team.resetCreateDefaultMaintainer"></a>

```go
func ResetCreateDefaultMaintainer()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-github.team.Team.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.team.Team.resetId"></a>

```go
func ResetId()
```

##### `ResetLdapDn` <a name="ResetLdapDn" id="@cdktf/provider-github.team.Team.resetLdapDn"></a>

```go
func ResetLdapDn()
```

##### `ResetParentTeamId` <a name="ResetParentTeamId" id="@cdktf/provider-github.team.Team.resetParentTeamId"></a>

```go
func ResetParentTeamId()
```

##### `ResetParentTeamReadId` <a name="ResetParentTeamReadId" id="@cdktf/provider-github.team.Team.resetParentTeamReadId"></a>

```go
func ResetParentTeamReadId()
```

##### `ResetParentTeamReadSlug` <a name="ResetParentTeamReadSlug" id="@cdktf/provider-github.team.Team.resetParentTeamReadSlug"></a>

```go
func ResetParentTeamReadSlug()
```

##### `ResetPrivacy` <a name="ResetPrivacy" id="@cdktf/provider-github.team.Team.resetPrivacy"></a>

```go
func ResetPrivacy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.team.Team.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.team.Team.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/team"

team.Team_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.team.Team.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.team.Team.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/team"

team.Team_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.team.Team.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.team.Team.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/team"

team.Team_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.team.Team.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.team.Team.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/team"

team.Team_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Team to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Team that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Team to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.team.Team.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.membersCount">MembersCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.slug">Slug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.createDefaultMaintainerInput">CreateDefaultMaintainerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.ldapDnInput">LdapDnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamIdInput">ParentTeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadIdInput">ParentTeamReadIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadSlugInput">ParentTeamReadSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.privacyInput">PrivacyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.createDefaultMaintainer">CreateDefaultMaintainer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.ldapDn">LdapDn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamId">ParentTeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadId">ParentTeamReadId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadSlug">ParentTeamReadSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.privacy">Privacy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.team.Team.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.team.Team.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.team.Team.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.team.Team.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.team.Team.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.team.Team.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.team.Team.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.team.Team.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.team.Team.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.team.Team.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.team.Team.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.team.Team.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.team.Team.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.team.Team.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.team.Team.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `MembersCount`<sup>Required</sup> <a name="MembersCount" id="@cdktf/provider-github.team.Team.property.membersCount"></a>

```go
func MembersCount() *f64
```

- *Type:* *f64

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.team.Team.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-github.team.Team.property.slug"></a>

```go
func Slug() *string
```

- *Type:* *string

---

##### `CreateDefaultMaintainerInput`<sup>Optional</sup> <a name="CreateDefaultMaintainerInput" id="@cdktf/provider-github.team.Team.property.createDefaultMaintainerInput"></a>

```go
func CreateDefaultMaintainerInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-github.team.Team.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.team.Team.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LdapDnInput`<sup>Optional</sup> <a name="LdapDnInput" id="@cdktf/provider-github.team.Team.property.ldapDnInput"></a>

```go
func LdapDnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.team.Team.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentTeamIdInput`<sup>Optional</sup> <a name="ParentTeamIdInput" id="@cdktf/provider-github.team.Team.property.parentTeamIdInput"></a>

```go
func ParentTeamIdInput() *string
```

- *Type:* *string

---

##### `ParentTeamReadIdInput`<sup>Optional</sup> <a name="ParentTeamReadIdInput" id="@cdktf/provider-github.team.Team.property.parentTeamReadIdInput"></a>

```go
func ParentTeamReadIdInput() *string
```

- *Type:* *string

---

##### `ParentTeamReadSlugInput`<sup>Optional</sup> <a name="ParentTeamReadSlugInput" id="@cdktf/provider-github.team.Team.property.parentTeamReadSlugInput"></a>

```go
func ParentTeamReadSlugInput() *string
```

- *Type:* *string

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktf/provider-github.team.Team.property.privacyInput"></a>

```go
func PrivacyInput() *string
```

- *Type:* *string

---

##### `CreateDefaultMaintainer`<sup>Required</sup> <a name="CreateDefaultMaintainer" id="@cdktf/provider-github.team.Team.property.createDefaultMaintainer"></a>

```go
func CreateDefaultMaintainer() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.team.Team.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.team.Team.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LdapDn`<sup>Required</sup> <a name="LdapDn" id="@cdktf/provider-github.team.Team.property.ldapDn"></a>

```go
func LdapDn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.team.Team.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentTeamId`<sup>Required</sup> <a name="ParentTeamId" id="@cdktf/provider-github.team.Team.property.parentTeamId"></a>

```go
func ParentTeamId() *string
```

- *Type:* *string

---

##### `ParentTeamReadId`<sup>Required</sup> <a name="ParentTeamReadId" id="@cdktf/provider-github.team.Team.property.parentTeamReadId"></a>

```go
func ParentTeamReadId() *string
```

- *Type:* *string

---

##### `ParentTeamReadSlug`<sup>Required</sup> <a name="ParentTeamReadSlug" id="@cdktf/provider-github.team.Team.property.parentTeamReadSlug"></a>

```go
func ParentTeamReadSlug() *string
```

- *Type:* *string

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-github.team.Team.property.privacy"></a>

```go
func Privacy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.team.Team.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamConfig <a name="TeamConfig" id="@cdktf/provider-github.team.TeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.team.TeamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/team"

&team.TeamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CreateDefaultMaintainer: interface{},
	Description: *string,
	Id: *string,
	LdapDn: *string,
	ParentTeamId: *string,
	ParentTeamReadId: *string,
	ParentTeamReadSlug: *string,
	Privacy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.name">Name</a></code> | <code>*string</code> | The name of the team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.createDefaultMaintainer">CreateDefaultMaintainer</a></code> | <code>interface{}</code> | Adds a default maintainer to the team. Adds the creating user to the team when 'true'. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.description">Description</a></code> | <code>*string</code> | A description of the team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#id Team#id}. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.ldapDn">LdapDn</a></code> | <code>*string</code> | The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamId">ParentTeamId</a></code> | <code>*string</code> | The ID or slug of the parent team, if this is a nested team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamReadId">ParentTeamReadId</a></code> | <code>*string</code> | The id of the parent team read in Github. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamReadSlug">ParentTeamReadSlug</a></code> | <code>*string</code> | The id of the parent team read in Github. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.privacy">Privacy</a></code> | <code>*string</code> | The level of privacy for the team. Must be one of 'secret' or 'closed'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.team.TeamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.team.TeamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.team.TeamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.team.TeamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.team.TeamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.team.TeamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.team.TeamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.team.TeamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#name Team#name}

---

##### `CreateDefaultMaintainer`<sup>Optional</sup> <a name="CreateDefaultMaintainer" id="@cdktf/provider-github.team.TeamConfig.property.createDefaultMaintainer"></a>

```go
CreateDefaultMaintainer interface{}
```

- *Type:* interface{}

Adds a default maintainer to the team. Adds the creating user to the team when 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#create_default_maintainer Team#create_default_maintainer}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-github.team.TeamConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#description Team#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.team.TeamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LdapDn`<sup>Optional</sup> <a name="LdapDn" id="@cdktf/provider-github.team.TeamConfig.property.ldapDn"></a>

```go
LdapDn *string
```

- *Type:* *string

The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#ldap_dn Team#ldap_dn}

---

##### `ParentTeamId`<sup>Optional</sup> <a name="ParentTeamId" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamId"></a>

```go
ParentTeamId *string
```

- *Type:* *string

The ID or slug of the parent team, if this is a nested team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#parent_team_id Team#parent_team_id}

---

##### `ParentTeamReadId`<sup>Optional</sup> <a name="ParentTeamReadId" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamReadId"></a>

```go
ParentTeamReadId *string
```

- *Type:* *string

The id of the parent team read in Github.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#parent_team_read_id Team#parent_team_read_id}

---

##### `ParentTeamReadSlug`<sup>Optional</sup> <a name="ParentTeamReadSlug" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamReadSlug"></a>

```go
ParentTeamReadSlug *string
```

- *Type:* *string

The id of the parent team read in Github.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#parent_team_read_slug Team#parent_team_read_slug}

---

##### `Privacy`<sup>Optional</sup> <a name="Privacy" id="@cdktf/provider-github.team.TeamConfig.property.privacy"></a>

```go
Privacy *string
```

- *Type:* *string

The level of privacy for the team. Must be one of 'secret' or 'closed'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/team#privacy Team#privacy}

---



