# `github_enterprise_organization`

Refer to the Terraform Registory for docs: [`github_enterprise_organization`](https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization).

# `enterpriseOrganization` Submodule <a name="`enterpriseOrganization` Submodule" id="@cdktf/provider-github.enterpriseOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseOrganization <a name="EnterpriseOrganization" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization github_enterprise_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new EnterpriseOrganization(Construct Scope, string Id, EnterpriseOrganizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig">EnterpriseOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig">EnterpriseOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

EnterpriseOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

EnterpriseOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

EnterpriseOrganization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

EnterpriseOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EnterpriseOrganization resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLoginsInput">AdminLoginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmailInput">BillingEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseIdInput">EnterpriseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLogins">AdminLogins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmail">BillingEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseId">EnterpriseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdminLoginsInput`<sup>Optional</sup> <a name="AdminLoginsInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLoginsInput"></a>

```csharp
public string[] AdminLoginsInput { get; }
```

- *Type:* string[]

---

##### `BillingEmailInput`<sup>Optional</sup> <a name="BillingEmailInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmailInput"></a>

```csharp
public string BillingEmailInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnterpriseIdInput`<sup>Optional</sup> <a name="EnterpriseIdInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseIdInput"></a>

```csharp
public string EnterpriseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AdminLogins`<sup>Required</sup> <a name="AdminLogins" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLogins"></a>

```csharp
public string[] AdminLogins { get; }
```

- *Type:* string[]

---

##### `BillingEmail`<sup>Required</sup> <a name="BillingEmail" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmail"></a>

```csharp
public string BillingEmail { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnterpriseId`<sup>Required</sup> <a name="EnterpriseId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseId"></a>

```csharp
public string EnterpriseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseOrganizationConfig <a name="EnterpriseOrganizationConfig" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new EnterpriseOrganizationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AdminLogins,
    string BillingEmail,
    string EnterpriseId,
    string Name,
    string Description = null,
    string DisplayName = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.adminLogins">AdminLogins</a></code> | <code>string[]</code> | List of organization owner usernames. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.billingEmail">BillingEmail</a></code> | <code>string</code> | The billing email address. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.enterpriseId">EnterpriseId</a></code> | <code>string</code> | The ID of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.name">Name</a></code> | <code>string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.description">Description</a></code> | <code>string</code> | The description of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdminLogins`<sup>Required</sup> <a name="AdminLogins" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.adminLogins"></a>

```csharp
public string[] AdminLogins { get; set; }
```

- *Type:* string[]

List of organization owner usernames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization#admin_logins EnterpriseOrganization#admin_logins}

---

##### `BillingEmail`<sup>Required</sup> <a name="BillingEmail" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.billingEmail"></a>

```csharp
public string BillingEmail { get; set; }
```

- *Type:* string

The billing email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization#billing_email EnterpriseOrganization#billing_email}

---

##### `EnterpriseId`<sup>Required</sup> <a name="EnterpriseId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.enterpriseId"></a>

```csharp
public string EnterpriseId { get; set; }
```

- *Type:* string

The ID of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization#enterprise_id EnterpriseOrganization#enterprise_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization#name EnterpriseOrganization#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization#description EnterpriseOrganization#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization#display_name EnterpriseOrganization#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



